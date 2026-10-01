import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: '연락',
  description: '전지나 노무사 상담·강의 문의 — 전화, 카카오톡 채널, 네이버 엑스퍼트, 노무법인 전승 천안 본사 주소.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <main>
      <div className="wrap phead">
        <div className="crumb">
          <Link href="/">홈</Link> › 연락
        </div>
        <h1>연락</h1>
        <p className="sub">상담과 강의 의뢰는 노무법인 전승 천안 본사로 연결됩니다. 어느 쪽으로 오셔도 같은 곳에 닿습니다.</p>
      </div>
      <section className="sec">
        <div className="wrap contact">
          <div className="cbox">
            <h2>전화</h2>
            <p className="big">{site.tel}</p>
            <p>평일 업무시간. 통화가 어려우면 문자를 남겨 주시면 회신합니다.</p>
            <a className="btn primary" href={site.telHref}>
              전화 걸기
            </a>
          </div>
          <div className="cbox">
            <h2>카카오톡 채널</h2>
            <p>사진·문서를 함께 보내야 하는 문의에 편합니다.</p>
            <a className="btn" href={site.kakao} target="_blank" rel="noopener">
              채널 열기
            </a>
            <small>{site.kakao}</small>
          </div>
          <div className="cbox">
            <h2>이메일</h2>
            <p className="big" style={{ fontSize: 22 }}>
              {site.email}
            </p>
            <p>강의·출강, 위촉·심의, 언론 문의는 이메일로 주시면 자료를 함께 보내 드립니다.</p>
            <a className="btn" href={`mailto:${site.email}`}>
              메일 보내기
            </a>
          </div>
          <div className="cbox">
            <h2>네이버 엑스퍼트</h2>
            <p>짧은 유료 상담을 원하시면 엑스퍼트에서 바로 예약할 수 있습니다.</p>
            <a className="btn" href={site.expert} target="_blank" rel="noopener">
              엑스퍼트 프로필
            </a>
          </div>
          <div className="cbox">
            <h2>사무소</h2>
            <p>
              {site.firm.name} 천안 본사
              <br />
              {site.address.full}
            </p>
            <a className="btn" href={site.address.map} target="_blank" rel="noopener">
              지도 보기
            </a>
            <small>서울·경기 지사 주소는 법인 홈페이지에 있습니다.</small>
          </div>
        </div>
      </section>
    </main>
  );
}
