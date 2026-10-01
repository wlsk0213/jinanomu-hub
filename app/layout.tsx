import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { site, nav, sameAs, channels } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: '%s | 전지나 노무사',
  },
  description: site.intro,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    siteName: '전지나 노무사',
    title: site.title,
    description: site.intro,
    url: site.url,
    images: [{ url: site.photo, width: 2000, height: 1333, alt: '전지나 공인노무사' }],
    locale: 'ko_KR',
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: '전지나',
  url: `${site.url}/`,
  image: `${site.url}${site.photo}`,
  jobTitle: '공인노무사',
  description: site.intro,
  worksFor: {
    '@type': 'Organization',
    name: site.firm.name,
    url: site.firm.url,
  },
  hasCredential: site.quals.map((q) => ({ '@type': 'EducationalOccupationalCredential', name: q })),
  knowsAbout: ['산업안전', '중대재해처벌법', '산재보상', '직장 내 괴롭힘 조사', '부당해고 구제신청', '부당징계 구제신청', '노동위원회 사건 대리', '근로감독 대응', '인사노무 자문'],
  memberOf: [
    { '@type': 'Organization', name: '당진시 노사민정협의회' },
    { '@type': 'GovernmentOrganization', name: '충청남도 감사위원회 안심노무사' },
  ],
  telephone: `+82-${site.tel.replace(/^0/, '')}`,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: 'KR',
  },
  sameAs,
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: `${site.url}/`,
  name: '전지나 노무사',
  inLanguage: 'ko',
  publisher: { '@id': `${site.url}/#person` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="c145d7fcaab8cb9a3565c34aa9cb0344ee6ae82d" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body>
        <header className="top">
          <div className="wrap top-in">
            <Link href="/" className="mark" aria-label="전지나 노무사 홈">
              <span className="mark-name">전지나</span>
              <span className="mark-sub">공인노무사</span>
            </Link>
            <nav className="menu" aria-label="주 메뉴">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
            </nav>
            <a className="top-cta" href={site.telHref}>
              {site.tel}
            </a>
          </div>
        </header>
        {children}
        <footer className="foot">
          <div className="wrap">
            <div className="foot-grid">
              <div>
                <p className="foot-name">전지나 공인노무사</p>
                <p className="foot-intro">{site.introPolite}</p>
                <p className="foot-line">
                  {site.firm.name} 천안 본사 · {site.address.full}
                  <br />
                  전화 {site.tel} · 이메일 <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
              </div>
              <div>
                <p className="foot-h">이어지는 곳</p>
                <ul className="foot-links">
                  {channels.map((c) => (
                    <li key={c.id}>
                      <a href={c.url} target="_blank" rel="noopener">
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="foot-copy">© 2026 전지나. 이 사이트의 글은 일반적인 정보 제공을 목적으로 하며 개별 사안의 법률 자문을 대신하지 않습니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
