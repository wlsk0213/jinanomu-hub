import Link from 'next/link';
import { site, numbers, numbersNote, board, routes, channels } from '@/lib/site';
import { recentWritings, channelLabel } from '@/lib/writing';
import { activities } from '@/lib/activities';
import { fmtDate } from '@/lib/site';

function Btn({ t, href, primary }: { t: string; href: string; primary?: boolean }) {
  const cls = primary ? 'bbtn primary' : 'bbtn';
  if (href.startsWith('/')) {
    return (
      <Link className={cls} href={href}>
        {t}
      </Link>
    );
  }
  const ext = href.startsWith('http');
  return (
    <a className={cls} href={href} {...(ext ? { target: '_blank', rel: 'noopener' } : {})}>
      {t}
    </a>
  );
}

export default function Home() {
  const recent = recentWritings(5);
  const acts = activities.slice(0, 4);
  return (
    <main>
      {/* 첫 화면 — 사람 + 니즈별 출구 안내판 */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-photo">
              <img src={site.photo} alt="전지나 공인노무사 일러스트" width={1125} height={1400} />
            </div>
            <div className="hero-text">
              <p className="eyebrow">공인노무사 · 노무법인 전승 대표</p>
              <h1>
                전지나
                <small>{site.tagline}</small>
              </h1>
              <p className="lede">{site.introPolite}</p>
              <div className="nums">
                {numbers.map((x) => (
                  <div key={x.label}>
                    <b>{x.n}</b>
                    <span>{x.label}</span>
                  </div>
                ))}
                <em>{numbersNote}</em>
              </div>
              <ul className="facts">
                <li>
                  <b>충청남도 안심노무사</b>갑질·괴롭힘 예방, 2년 연속 위촉
                </li>
                <li>
                  <b>공공기관 심의·평가 위원</b>고충·징계·감사·인권경영·경영평가
                </li>
                <li>
                  <b>산업안전기사 · ISO45001 심사원</b>안전보건관리체계 컨설팅 4년 연속(A등급)
                </li>
              </ul>
            </div>
          </div>

          <div className="board">
            {board.map((g) => (
              <div className="bgroup" key={g.label}>
                <span className="blabel">{g.label}</span>
                <div className="bitems">
                  {g.items.map((it) => (
                    <Btn key={it.t} {...it} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 어떤 도움이 필요하세요? — 니즈별 입구 */}
      <section className="sec" id="route">
        <div className="wrap">
          <div className="sec-head center">
            <span className="kicker">Route</span>
            <h2>어떤 도움이 필요하세요?</h2>
            <p>상담·업무·글·강의가 섞이지 않도록 상황별로 입구를 나눴습니다. 업무 상담은 노무법인 전승으로 이어집니다.</p>
          </div>
          <div className="routes">
            {routes.map((r) => (
              <article className="rcard" key={r.title}>
                <span className="rkicker">{r.kicker}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <Btn t={r.btn} href={r.href} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>최근에 쓴 글</h2>
            <Link className="more" href="/writing/">
              전체 글 보기
            </Link>
          </div>
          <div className="wlist">
            {recent.map((w) => (
              <div className="wrow" key={w.url}>
                <time dateTime={w.date}>{fmtDate(w.date)}</time>
                <div>
                  <a href={w.url} target="_blank" rel="noopener">
                    <b>{w.title}</b>
                  </a>
                  <p>{w.summary}</p>
                  <div className="tags">
                    <span className="tag">{w.field}</span>
                    <span className="tag ch">{channelLabel[w.channel]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>최근 활동</h2>
            <Link className="more" href="/activities/">
              위촉·활동 전체
            </Link>
          </div>
          <div className="tl">
            {acts.map((a) => (
              <div className="tl-row" key={a.title + a.date}>
                <time dateTime={a.date}>{fmtDate(a.date)}</time>
                <span className="kind">{a.kind}</span>
                <div>
                  <b>{a.title}</b>
                  {a.url && (
                    <a className="src" href={a.url} target="_blank" rel="noopener">
                      원문
                    </a>
                  )}
                  <span>
                    {a.org}
                    {a.note ? ` · ${a.note}` : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 공식 채널과 연결된 곳 */}
      <section className="sec" id="connect">
        <div className="wrap">
          <div className="sec-head center">
            <span className="kicker">Connect</span>
            <h2>공식 채널과 연결된 곳</h2>
            <p>글·소식·상담 창구를 한곳에서 확인하세요. 모두 전지나 노무사와 노무법인 전승이 직접 운영합니다.</p>
          </div>
          <ul className="clist">
            {channels.map((c) => (
              <li key={c.id}>
                <a href={c.url} target="_blank" rel="noopener">
                  <span className={`ctile ${c.kind}`}>{c.tile}</span>
                  <span className="ctext">
                    <b>{c.label}</b>
                    <small>{c.desc}</small>
                  </span>
                  <span className="carrow" aria-hidden>
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
