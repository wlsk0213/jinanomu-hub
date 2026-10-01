import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { currentRoles, pastRoles } from '@/lib/activities';

export const metadata: Metadata = {
  title: '소개',
  description: site.intro,
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <main>
      <div className="wrap phead">
        <div className="crumb">
          <Link href="/">홈</Link> › 소개
        </div>
        <h1>전지나 공인노무사</h1>
        <p className="sub">{site.shortLine1}</p>
      </div>
      <section className="sec">
        <div className="wrap about">
          <div>
            <div className="about-photo">
              <img src={site.photo} alt="전지나 공인노무사" width={2000} height={1333} />
            </div>
            <ul className="quals" style={{ marginTop: 14 }}>
              {site.quals.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>하는 일</h2>
            <p>{site.introPolite}</p>
            <p style={{ marginTop: 10 }}>
              사업장에서는 안전보건관리체계와 위험성평가, 근로감독 대응, 직장 내 괴롭힘 조사와 심의, 해고·징계 절차 자문을 맡고,
              근로자와 유족에게는 산재 신청과 불승인 심사청구, 부당해고 구제신청을 함께 준비합니다. 공공기관과 지방자치단체의 고충·징계·감사·인권경영 위원으로 심의에 참여하고,
              같은 주제로 교육과 강의를 합니다.
            </p>
            <p style={{ marginTop: 10 }}>
              {site.firm.name}은 천안 본사와 서울·경기 지사를 두고 있습니다.{' '}
              <a href={site.firm.url} target="_blank" rel="noopener" style={{ borderBottom: '1px solid var(--brass)' }}>
                법인 홈페이지 →
              </a>
            </p>

            <h2>현재 맡고 있는 위촉·위원</h2>
            <ul className="roles">
              {currentRoles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <h2>이전 활동</h2>
            <ul className="roles">
              {pastRoles.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>

            <h2>글을 쓰는 방식</h2>
            <p>
              모든 글은 국가법령정보센터의 현행 법령과 고용노동부 매뉴얼 원문을 대조해 씁니다. 법률상 의무와 매뉴얼의 권고, 실무 제안을
              문장에서 구분하고, 판례는 사건번호와 원문 링크를 함께 적습니다. 상담에서 들은 질문 하나가 글 하나가 됩니다.
            </p>

            <h2 id="profile-kit">프로필 자료</h2>
            <p>강의·행사 안내문, 기사, 위촉 공문에 쓰실 사진과 약력입니다. 그대로 내려받아 쓰셔도 됩니다.</p>
            <div className="kit">
              <a href={site.photoReal} download="jeon-jina-profile.jpg">
                <b>프로필 사진(실사)</b>
                <span>JPG · 2000×1333</span>
              </a>
              <a href={site.photo} download="jeon-jina-illust.webp">
                <b>프로필 일러스트</b>
                <span>WEBP · 1125×1400</span>
              </a>
              <a href={`mailto:${site.email}?subject=프로필 자료 요청`}>
                <b>원본·다른 크기 요청</b>
                <span>{site.email}</span>
              </a>
            </div>
            <div className="bio-box">
              {`전지나 공인노무사 · 노무법인 전승 대표
${site.intro}
자격: ${site.quals.join(', ')}
주요 위촉: 당진시 노사민정협의회 본협의회 위원, 충청남도 갑질 및 괴롭힘 예방 안심노무사, 충청남도의회 갑질 상담 조사관, 충청소방학교 소방공무원 고충심사위원회 민간위원, 한국가스기술공사 감사·고충심의위원, 코레일테크(주) 고충·징계심의위원`}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
