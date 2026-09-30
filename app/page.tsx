import Link from 'next/link';
import { site, channels } from '@/lib/site';
import { recentWritings, channelLabel } from '@/lib/writing';
import { activities } from '@/lib/activities';
import { fmtDate } from '@/lib/site';

export default function Home() {
  const recent = recentWritings(6);
  const acts = activities.slice(0, 4);
  return (
    <main>
      <section className="card-hero">
        <div className="wrap">
          <div className="card">
            <div className="card-text">
              <p className="eyebrow">공인노무사 · 노무법인 전승 대표</p>
              <h1>
                전지나
                <small>{site.tagline}</small>
              </h1>
              <p className="lede">{site.introPolite}</p>
              <div className="card-actions">
                <a className="btn primary" href={site.telHref}>
                  전화 {site.tel}
                </a>
                <a className="btn" href={site.kakao} target="_blank" rel="noopener">
                  카카오톡 문의
                </a>
                <Link className="btn" href="/writing/">
                  글 읽기
                </Link>
              </div>
            </div>
            <div className="card-photo">
              <img src={site.photo} alt="전지나 공인노무사" width={2000} height={1333} />
            </div>
            <div className="card-facts">
              <div>
                <b>충청남도 안심노무사</b>
                갑질·괴롭힘 예방, 2년 연속 위촉
              </div>
              <div>
                <b>공공기관 심의·평가 위원</b>
                고충·징계·감사·인권경영·경영평가
              </div>
              <div>
                <b>산업안전기사 · ISO45001 심사원</b>
                안전보건관리체계 컨설팅 4년 연속(A등급)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>세 가지 일</h2>
            <p>사업주와 근로자, 어느 쪽의 문제든 같은 기준으로 봅니다.</p>
          </div>
          <div className="fields">
            {site.fields.map((f) => (
              <a key={f.id} className="field" href={f.href} target="_blank" rel="noopener">
                <b>{f.label}</b>
                <span>{f.lead}</span>
                <em>자세히 →</em>
              </a>
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

      <section className="sec">
        <div className="wrap">
          <div className="band">
            <div>
              <h2>강의·출강 의뢰</h2>
              <p>직장 내 괴롭힘·성희롱 예방교육, 조사 실무, 관리자 노동법, 중대재해처벌법. 대상과 시간에 맞춰 구성합니다.</p>
            </div>
            <div className="band-actions">
              <Link className="btn primary" href="/lectures/">
                주제와 의뢰 방법
              </Link>
              <a className="btn" href={site.kakao} target="_blank" rel="noopener">
                카카오톡으로 문의
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>이어지는 곳</h2>
            <p>글과 소식은 채널마다 나뉘어 있습니다. 여기서 한 번에 찾아가세요.</p>
          </div>
          <div className="chs">
            {channels.map((c) => (
              <a key={c.id} className="chn" href={c.url} target="_blank" rel="noopener">
                <b>{c.label}</b>
                <span>{c.desc}</span>
                <i>{c.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</i>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
