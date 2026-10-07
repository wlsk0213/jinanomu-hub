// 세 채널(개인 블로그·법인 인사이트·산재 사이트)의 새 글을 빌드 직전에 모아 lib/writing-auto.json에 쓴다.
// 손으로 적은 lib/writing.ts 목록이 우선이고, 거기 없는 글만 자동으로 더해진다.
// 가져오기가 실패하면 기존 json을 그대로 둔다(빌드는 멈추지 않음).
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'lib', 'writing-auto.json');
const UA = { headers: { 'user-agent': 'jinanomu-hub-sync/1.0 (+https://jinanomu.com)' } };

const decode = (s) =>
  String(s ?? '')
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

// 요약은 설명문의 첫 문장(최대 110자).
function summarize(text) {
  const t = decode(text).replace(/^\*?\s*작성기준일[^*]*\*\s*/, '');
  const first = t.split(/(?<=[.다요])\s/)[0] || t;
  return first.length > 110 ? first.slice(0, 108).trim() + '…' : first;
}

function fieldFrom(text, fallback) {
  if (/근로감독|노동감독/.test(text)) return '근로감독';
  if (/해고|징계|권고사직|구제신청/.test(text)) return '해고·징계';
  if (/괴롭힘|성희롱/.test(text)) return '직장 내 괴롭힘';
  if (/산재|유족급여|장해급여|난청|요양/.test(text)) return '산재보상';
  if (/중대재해|산업안전|위험성평가|안전보건/.test(text)) return '산업안전';
  return fallback;
}

// 워드프레스 카테고리 id → 분야
const WP_CAT = { 2: '산업안전', 3: '산재보상', 4: '직장 내 괴롭힘', 5: '인사·노무', 7: '인사·노무', 8: '해고·징계', 9: 'HR컨설팅' };
const INSIGHT_CAT = { '산업안전·중대재해': '산업안전', 산재보상: '산재보상', '직장 내 괴롭힘': '직장 내 괴롭힘', '인사·노무 자문': '인사·노무' };

async function getJson(url) {
  const r = await fetch(url, UA);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}
async function getText(url) {
  const r = await fetch(url, UA);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
}

async function fromBlog() {
  const posts = await getJson(
    'https://blog.jinanomu.com/wp-json/wp/v2/posts?per_page=50&status=publish&_fields=title,link,date,excerpt,categories',
  );
  return posts.map((p) => {
    const title = decode(p.title?.rendered);
    const cat = WP_CAT[(p.categories || [])[0]] || '인사·노무';
    const field = cat === '인사·노무' ? fieldFrom(title, cat) : cat;
    return { title, url: p.link, date: String(p.date).slice(0, 10), channel: 'blog', field, summary: summarize(p.excerpt?.rendered) };
  });
}

// 정적 사이트: sitemap에서 글 주소를 찾고, 각 페이지의 og:title·설명·발행일·분류를 읽는다.
async function fromStatic(site, pattern, channel, fieldOf) {
  const xml = await getText(`${site}/sitemap.xml`);
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => pattern.test(u));
  const out = [];
  for (const url of urls) {
    try {
      const h = await getText(url);
      const meta = (re) => decode((h.match(re) || [])[1]);
      const title = meta(/property="og:title" content="([^"]+)"/);
      const date = meta(/property="article:published_time" content="([^"]+)"/).slice(0, 10);
      const desc = meta(/<meta name="description" content="([^"]+)"/);
      const section = meta(/"articleSection":"([^"]+)"/);
      if (title && /^\d{4}-\d{2}-\d{2}$/.test(date)) out.push({ title, url, date, channel, field: fieldOf(section, title), summary: summarize(desc) });
    } catch (e) {
      console.warn('[sync-writing] 건너뜀', url, e.message);
    }
  }
  return out;
}

async function main() {
  const prev = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : [];
  const results = await Promise.allSettled([
    fromBlog(),
    fromStatic('https://jeonseung.co.kr', /\/insights\/[^/]+\/$/, 'insight', (s, t) => {
      const f = INSIGHT_CAT[s] || '인사·노무';
      return f === '인사·노무' ? fieldFrom(t, f) : f;
    }),
    fromStatic('https://sanjae.jinanomu.com', /\/posts\/[^/]+\/$/, 'sanjae', () => '산재보상'),
  ]);
  const names = ['블로그', '법인 인사이트', '산재 사이트'];
  let items = [];
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      items.push(...r.value);
      console.log(`[sync-writing] ${names[i]} ${r.value.length}편`);
    } else {
      const ch = ['blog', 'insight', 'sanjae'][i];
      const kept = prev.filter((w) => w.channel === ch);
      items.push(...kept);
      console.warn(`[sync-writing] ${names[i]} 가져오기 실패 → 이전 목록 ${kept.length}편 유지:`, r.reason?.message);
    }
  });
  const seen = new Set();
  items = items
    .filter((w) => (seen.has(w.url) ? false : seen.add(w.url)))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  fs.writeFileSync(OUT, JSON.stringify(items, null, 2) + '\n');
  console.log(`[sync-writing] 합계 ${items.length}편 → lib/writing-auto.json`);
}

main().catch((e) => {
  console.warn('[sync-writing] 실패, 기존 목록으로 빌드합니다:', e.message);
});
