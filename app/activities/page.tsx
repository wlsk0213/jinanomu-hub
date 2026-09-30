import type { Metadata } from 'next';
import Link from 'next/link';
import { activities, currentRoles, pastRoles } from '@/lib/activities';
import { fmtDate } from '@/lib/site';

export const metadata: Metadata = {
  title: '활동·위촉',
  description: '전지나 노무사의 위촉·심의·강의·활동 연혁과 현재 맡고 있는 위원 목록입니다.',
  alternates: { canonical: '/activities/' },
};

export default function ActivitiesPage() {
  return (
    <main>
      <div className="wrap phead">
        <div className="crumb">
          <Link href="/">홈</Link> › 활동·위촉
        </div>
        <h1>활동·위촉</h1>
        <p className="sub">날짜가 확인되는 것만 적습니다. 원문이 있는 항목은 법인 소식이나 보도로 이어집니다.</p>
      </div>
      <section className="sec">
        <div className="wrap">
          <div className="tl">
            {activities.map((a) => (
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
      <section className="sec">
        <div className="wrap two">
          <div>
            <div className="sec-head">
              <h2>현재 위촉·위원</h2>
            </div>
            <ul className="roles one">
              {currentRoles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="sec-head">
              <h2>이전 활동</h2>
            </div>
            <ul className="roles one">
              {pastRoles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
