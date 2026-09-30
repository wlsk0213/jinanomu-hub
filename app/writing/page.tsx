import type { Metadata } from 'next';
import Link from 'next/link';
import { writings, channelLabel, type Field } from '@/lib/writing';
import { fmtDate } from '@/lib/site';

export const metadata: Metadata = {
  title: '글',
  description: '전지나 노무사가 노무법인 전승 인사이트, 개인 블로그, 산재보상 안내 사이트에 쓴 글을 분야별로 모았습니다.',
  alternates: { canonical: '/writing/' },
};

const order: Field[] = ['산재보상', '직장 내 괴롭힘', '산업안전', '근로감독', '인사·노무', '해고·징계', 'HR컨설팅'];
const anchor = (f: string) => f.replace(/[^가-힣A-Za-z0-9]/g, '');

export default function WritingPage() {
  const groups = order
    .map((f) => ({ field: f, items: writings.filter((w) => w.field === f) }))
    .filter((g) => g.items.length > 0);
  return (
    <main>
      <div className="wrap phead">
        <div className="crumb">
          <Link href="/">홈</Link> › 글
        </div>
        <h1>글</h1>
        <p className="sub">세 곳에 나뉘어 있는 글을 한 목록으로 모았습니다. 제목을 누르면 원래 실린 곳으로 이동합니다.</p>
        <div className="chips">
          {groups.map((g) => (
            <a key={g.field} href={`#${anchor(g.field)}`}>
              {g.field}
              <small>{g.items.length}</small>
            </a>
          ))}
        </div>
        <div className="legend">
          <span>실린 곳:</span>
          <a href="https://jeonseung.co.kr/insights/" target="_blank" rel="noopener">
            {channelLabel.insight}
          </a>
          <a href="https://blog.jinanomu.com/" target="_blank" rel="noopener">
            {channelLabel.blog}
          </a>
          <a href="https://sanjae.jinanomu.com/" target="_blank" rel="noopener">
            {channelLabel.sanjae}
          </a>
        </div>
      </div>
      <div className="wrap">
        {groups.map((g) => (
          <section className="fsec" key={g.field} id={anchor(g.field)}>
            <h2>
              {g.field}
              <small>{g.items.length}편</small>
            </h2>
            <div className="wlist">
              {g.items.map((w) => (
                <div className="wrow" key={w.url}>
                  <time dateTime={w.date}>{fmtDate(w.date)}</time>
                  <div>
                    <a href={w.url} target="_blank" rel="noopener">
                      <b>{w.title}</b>
                    </a>
                    <p>{w.summary}</p>
                    <div className="tags">
                      <span className="tag ch">{channelLabel[w.channel]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
