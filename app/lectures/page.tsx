import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { lectureTopics, activities } from '@/lib/activities';
import { fmtDate } from '@/lib/site';

export const metadata: Metadata = {
  title: '강의·출강',
  description: '직장 내 괴롭힘·성희롱 예방교육, 괴롭힘 조사 실무, 관리자 노동법, 중대재해처벌법 강의 주제와 의뢰 방법입니다.',
  alternates: { canonical: '/lectures/' },
};

export default function LecturesPage() {
  const recent = activities.filter((a) => a.kind === '강의');
  return (
    <main>
      <div className="wrap phead">
        <div className="crumb">
          <Link href="/">홈</Link> › 강의·출강
        </div>
        <h1>강의·출강</h1>
        <p className="sub">법령과 판례를 실제 사례에 붙여 설명합니다. 대상과 시간에 맞춰 내용을 다시 짭니다.</p>
      </div>
      <section className="sec">
        <div className="wrap">
          <div className="topics">
            {lectureTopics.map((t) => (
              <article className="topic" key={t.title}>
                <h3>{t.title}</h3>
                <p className="aud">{t.audience}</p>
                <ul>
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {t.legal && <p className="legal">{t.legal}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>의뢰 방법</h2>
          </div>
          <div className="steps">
            <div className="step">
              <b>1. 문의</b>
              전화({site.tel}) 또는 카카오톡 채널로 기관명, 교육 대상과 인원, 희망 일정·시간, 장소(또는 온라인), 주제를 알려 주세요.
            </div>
            <div className="step">
              <b>2. 구성안</b>
              대상에 맞춘 목차와 소요 시간, 강의료 견적을 보내 드립니다. 기관 내부 사례를 반영해야 하면 사전 인터뷰를 잡습니다.
            </div>
            <div className="step">
              <b>3. 확정·자료</b>
              일정 확정 후 교육 자료(PDF)와 수료 확인에 필요한 서류를 준비합니다. 교육 후 질의는 일정 기간 이어서 받습니다.
            </div>
          </div>
          <div className="card-actions" style={{ marginTop: 18 }}>
            <a className="btn primary" href={site.telHref}>
              전화 {site.tel}
            </a>
            <a className="btn" href={site.kakao} target="_blank" rel="noopener">
              카카오톡 채널
            </a>
          </div>
        </div>
      </section>
      {recent.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-head">
              <h2>최근 강의</h2>
              <Link className="more" href="/activities/">
                활동 전체
              </Link>
            </div>
            <div className="tl">
              {recent.map((a) => (
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
      )}
    </main>
  );
}
