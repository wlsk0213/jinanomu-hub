import type { Metadata } from 'next';
import Link from 'next/link';
import { pressItems, pressYears, fmtPressDate } from '@/lib/press';

export const metadata: Metadata = {
  title: '언론',
  description: '전지나 노무사가 언급된 언론 보도와 기관 소식 목록입니다. 원문 링크로 이어집니다.',
  alternates: { canonical: '/press/' },
};

export default function PressPage() {
  const years = pressYears();
  return (
    <main>
      <div className="wrap phead">
        <div className="crumb">
          <Link href="/">홈</Link> › 언론
        </div>
        <h1>언론</h1>
        <p className="sub">이름이 실린 기사와 기관 소식입니다. 인용문은 원문 문장 그대로 옮겼습니다.</p>
      </div>
      <section className="sec">
        <div className="wrap">
          {years.map((y) => (
            <div key={y}>
              <h2 className="press-year">{y}년</h2>
              {pressItems
                .filter((p) => p.date.startsWith(y))
                .map((p) => (
                  <div className="press" key={p.url}>
                    <time dateTime={p.date}>{fmtPressDate(p.date)}</time>
                    <div>
                      <span className="outlet">{p.outlet}</span>
                      <b>
                        <a href={p.url} target="_blank" rel="noopener">
                          {p.headline}
                        </a>
                      </b>
                      {p.quote && <q>{p.quote}</q>}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
