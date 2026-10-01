// jinanomu.com — 전지나 노무사 개인 홈페이지 기본 정보
// 문구는 웍스 「3. 문구/공식문장 (확정본).md」의 [C]·[D-개인]을 그대로 쓴다. 새 문장을 만들지 않는다.

export const site = {
  url: 'https://jinanomu.com',
  name: '전지나 노무사',
  title: '전지나 노무사 | 산업안전·산재보상·직장 내 괴롭힘 공인노무사',
  tagline: '일터의 문제를 법과 기록으로 푸는 노무사', // 2026-10-01 대표 확정
  // [C] 개인형 — 프로필·구조화 데이터 (원문 그대로)
  intro:
    '전지나 노무사는 산업안전·중대재해, 산재보상, 직장 내 괴롭힘 분야를 중심으로 활동하는 공인노무사로, 노무법인 전승의 대표이며 충청남도 갑질·괴롭힘 예방 안심노무사다.',
  // [C-경어] — 독자에게 말을 거는 자리
  introPolite:
    '전지나 노무사는 산업안전·중대재해, 산재보상, 직장 내 괴롭힘 분야를 중심으로 활동하는 공인노무사로, 노무법인 전승의 대표이며 충청남도 갑질·괴롭힘 예방 안심노무사입니다.',
  // [D-개인]
  shortLine1: '노무법인 전승 대표 · 충남 갑질·괴롭힘 예방 안심노무사',
  shortLine2: '산업안전·중대재해 | 산재보상 | 직장 내 괴롭힘 조사',
  photo: '/jeon-jina-illust.webp', // 2026-10-01 대표 제공 일러스트
  photoReal: '/jeon-jina.jpg', // 프로필 자료(내려받기)용 실사
  email: 'jjn@hrjs.co.kr', // 2026-10-01 공개 결정
  tel: '041-417-1915',
  telHref: 'tel:041-417-1915',
  kakao: 'http://pf.kakao.com/_AxmxdJn',
  expert: 'https://m.expert.naver.com/expert/profile/home?storeId=100000347',
  firm: { name: '노무법인 전승', url: 'https://jeonseung.co.kr' },
  address: {
    full: '충남 천안시 동남구 청수9로 1, 7층 703호 (청당동, 청오법조빌딩)',
    street: '청수9로 1, 7층 703호',
    locality: '천안시 동남구',
    region: '충청남도',
    postal: '31198',
    map: 'https://g.page/r/CXpdPSZ6A4y9EBM',
  },
  quals: ['공인노무사', '산업안전기사', 'ISO45001 심사원', 'ESG 심사원'],
  fields: [
    {
      id: 'safety',
      label: '산업안전·중대재해',
      lead: '작업중지 해제, 안전보건관리체계, 위험성평가, 산업안전감독 대응',
      href: 'https://jeonseung.co.kr/services/industrial-safety/',
    },
    {
      id: 'sanjae',
      label: '산재보상',
      lead: '소음성 난청·직업성 암·뇌심혈관 질환, 유족급여, 불승인 심사청구',
      href: 'https://sanjae.jinanomu.com/',
    },
    {
      id: 'harassment',
      label: '직장 내 괴롭힘',
      lead: '외부 조사 위탁, 조사보고서, 고충심의, 예방교육',
      href: 'https://jeonseung.co.kr/services/workplace-harassment/',
    },
  ],
};

// 외부 채널 — Person.sameAs 와 연락 페이지에 함께 쓴다.
export interface Channel {
  id: string;
  label: string;
  desc: string;
  url: string;
  kind: 'site' | 'blog' | 'naver' | 'contact' | 'profile';
}

export const channels: Channel[] = [
  { id: 'firm', label: '노무법인 전승 홈페이지', desc: '업무 분야·구성원·인사이트', url: 'https://jeonseung.co.kr/', kind: 'site' },
  { id: 'blog', label: '전지나 노무사 블로그', desc: '사업주·인사담당자를 위한 노동법 실무 글', url: 'https://blog.jinanomu.com/', kind: 'blog' },
  { id: 'sanjae', label: '산재보상 안내 사이트', desc: '상병별·직종별 산재 인정기준과 청구 절차', url: 'https://sanjae.jinanomu.com/', kind: 'site' },
  { id: 'naver-official', label: '네이버 블로그(법인 소식)', desc: '위촉·교육·활동 소식', url: 'https://blog.naver.com/cplajjn', kind: 'naver' },
  { id: 'naver-sanjae', label: '네이버 블로그(산재)', desc: '산재보상 사례와 안내', url: 'https://blog.naver.com/jslaborlaw', kind: 'naver' },
  { id: 'naver-hr', label: '네이버 블로그(인사노무)', desc: '인사·노무, 직장 내 괴롭힘', url: 'https://blog.naver.com/jshr1915', kind: 'naver' },
  { id: 'expert', label: '네이버 엑스퍼트', desc: '유료 노동법 상담', url: 'https://m.expert.naver.com/expert/profile/home?storeId=100000347', kind: 'contact' },
  { id: 'kakao', label: '카카오톡 채널', desc: '상담 문의', url: 'http://pf.kakao.com/_AxmxdJn', kind: 'contact' },
  { id: 'gbp', label: '구글 비즈니스 프로필', desc: '천안 본사 위치·리뷰', url: 'https://g.page/r/CXpdPSZ6A4y9EBM', kind: 'profile' },
];

export const sameAs = channels.map((c) => c.url);

// 첫 화면 숫자 — 웍스 「공식문장 (확정본)」 "공개 가능한 실적 수치" 범위 안에서만. 텍스트 전용(구조화 데이터 금지).
export const numbers = [
  { n: '18', label: '위촉·위원' },
  { n: '300+', label: '자문 기업' },
  { n: '4,000+', label: '상담·사건' },
];
export const numbersNote = '기준: 2026년 9월';

// 첫 화면 안내판 — 니즈별 출구. 업무 설명은 여기서 쓰지 않고 법인 홈으로 보낸다.
export interface BoardItem {
  t: string;
  href: string;
  primary?: boolean;
}
export const board: { label: string; items: BoardItem[] }[] = [
  {
    label: '상담하기',
    items: [
      { t: '전화 041-417-1915', href: 'tel:041-417-1915', primary: true },
      { t: '카카오톡 채널', href: 'http://pf.kakao.com/_AxmxdJn' },
      { t: '네이버 엑스퍼트', href: 'https://m.expert.naver.com/expert/profile/home?storeId=100000347' },
      { t: '이메일', href: 'mailto:jjn@hrjs.co.kr' },
      { t: '천안 사무소 지도', href: 'https://g.page/r/CXpdPSZ6A4y9EBM' },
    ],
  },
  {
    label: '법인·업무',
    items: [
      { t: '노무법인 전승 홈페이지', href: 'https://jeonseung.co.kr/', primary: true },
      { t: '산재보상 안내', href: 'https://sanjae.jinanomu.com/' },
      { t: '근로감독 대응', href: 'https://jeonseung.co.kr/services/labor-inspection/' },
      { t: '직장 내 괴롭힘 조사', href: 'https://jeonseung.co.kr/services/workplace-harassment/' },
      { t: '산업안전·중대재해', href: 'https://jeonseung.co.kr/services/industrial-safety/' },
    ],
  },
  {
    label: '글·채널',
    items: [
      { t: '전지나 노무사 블로그', href: 'https://blog.jinanomu.com/', primary: true },
      { t: '네이버 블로그 · 소식', href: 'https://blog.naver.com/cplajjn' },
      { t: '네이버 블로그 · 산재', href: 'https://blog.naver.com/jslaborlaw' },
      { t: '네이버 블로그 · 인사노무', href: 'https://blog.naver.com/jshr1915' },
      { t: '글 모아보기', href: '/writing/' },
    ],
  },
  {
    label: '활동·의뢰',
    items: [
      { t: '강의·출강 의뢰', href: '/lectures/', primary: true },
      { t: '위촉·활동', href: '/activities/' },
      { t: '언론 보도', href: '/press/' },
      { t: '프로필 자료', href: '/about/#profile-kit' },
    ],
  },
];

export const nav = [
  { href: '/about/', label: '소개' },
  { href: '/writing/', label: '글' },
  { href: '/activities/', label: '활동·위촉' },
  { href: '/lectures/', label: '강의·출강' },
  { href: '/press/', label: '언론' },
  { href: '/contact/', label: '연락' },
];

export function fmtDate(d: string): string {
  const [y, m, day] = d.split('-');
  if (!m) return `${y}년`;
  if (!day) return `${y}년 ${Number(m)}월`;
  return `${y}년 ${Number(m)}월 ${Number(day)}일`;
}
