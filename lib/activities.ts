// 활동·위촉 연혁과 강의 주제. 위촉 사실은 법인 홈페이지 lib/members.ts·lib/news.ts 와 같은 내용을 유지한다.

export type ActivityKind = '위촉' | '강의' | '활동' | '자문';

export interface Activity {
  date: string; // YYYY-MM-DD 또는 YYYY-MM
  kind: ActivityKind;
  title: string;
  org?: string;
  note?: string;
  url?: string; // 법인 소식·보도 원문
}

export const activities: Activity[] = [
  {
    date: '2026-09-29',
    kind: '위촉',
    title: '당진시 노사민정협의회 본협의회 위원',
    org: '당진시',
    note: '임기 2026.9.29 ~ 2028.9.28 · 당진신문 10-01 보도',
    url: 'https://jeonseung.co.kr/news/dangjin-labor-management-council-2026/',
  },
  {
    date: '2026-09-09',
    kind: '강의',
    title: '직장 내 괴롭힘·성희롱 예방 교육',
    org: '(재)생거진천 문화재단',
    note: '관련 법령·주요 판례·실무 사례 중심',
    url: 'https://www.ccdailynews.com/news/articleView.html?idxno=2439591',
  },
  {
    date: '2026-09',
    kind: '위촉',
    title: '충청남도 갑질 및 괴롭힘 예방 안심노무사(2년 연속)',
    org: '충청남도 감사위원회',
    url: 'https://jeonseung.co.kr/news/chungnam-ansim-nomusa-2026/',
  },
  {
    date: '2026-06',
    kind: '위촉',
    title: '충청소방학교 소방공무원 고충심사위원회 민간위원',
    org: '충청남도 충청소방학교',
    url: 'https://jeonseung.co.kr/news/chungnam-fire-academy-grievance-committee-2026/',
  },
  {
    date: '2026-05',
    kind: '위촉',
    title: '2026년 예술인 복지사업 법률 전문상담자',
    org: '충남문화관광재단',
    url: 'https://jeonseung.co.kr/news/chungnam-artist-legal-counselor-2026/',
  },
  {
    date: '2026-04',
    kind: '위촉',
    title: '산업·일자리 전환 지원 사업 컨설턴트',
    org: '충남경제진흥원',
    url: 'https://jeonseung.co.kr/news/chungnam-economy-job-transition-consultant-2026/',
  },
  {
    date: '2026-04',
    kind: '위촉',
    title: '사회서비스 제공기관 경영 컨설팅 위원(2년 연속)',
    org: '충남사회서비스원',
    url: 'https://jeonseung.co.kr/news/chungnam-social-service-management-consultant-2026/',
  },
  {
    date: '2026-02-26',
    kind: '강의',
    title: '노인맞춤돌봄서비스 신입전담사회복지사 역량강화교육 — 인사노무',
    org: '충남광역지원기관',
    note: '노동관계법령, 근로계약서, 모성보호, 산업안전·산업재해',
    url: 'http://www.hongnobok.or.kr/hongnobok/bbs/board.php?bo_table=bo_02&wr_id=5549',
  },
  {
    date: '2025-12-04',
    kind: '활동',
    title: '충남 청년 창업·창직 성과공유회 무료 상담관 운영',
    org: "봉사단체 '더함'",
    url: 'https://n.news.naver.com/mnews/article/421/0008643723',
  },
  {
    date: '2025-09',
    kind: '위촉',
    title: '갑질 피해 신고·지원센터 상담조사관',
    org: '충청남도의회',
    url: 'https://jeonseung.co.kr/news/chungnam-council-gapjil-investigator-2025/',
  },
  {
    date: '2025-06',
    kind: '위촉',
    title: '충청남도 안심노무사',
    org: '충청남도 감사위원회',
    note: '공직 내 갑질 신고자 보호·대리신고 제도',
    url: 'https://jeonseung.co.kr/news/chungnam-ansim-nomusa-2025/',
  },
  {
    date: '2024-12',
    kind: '활동',
    title: '천안·아산 전문직 청년 모임 더함스터디 연탄 나눔 봉사',
    url: 'https://m.asantoday.com/120875',
  },
];

// 현재 맡고 있는 위촉·위원 (법인 홈페이지 구성원 페이지와 동일)
export const currentRoles: string[] = [
  '당진시 노사민정협의회 본협의회 위원',
  '충청남도 갑질 및 괴롭힘 예방 안심노무사',
  '충청남도 충청소방학교 소방공무원 고충심사위원회 민간위원',
  '충청남도의회 갑질 상담 조사관',
  '충남경제진흥원 산업·일자리 전환 지원 사업 컨설턴트',
  '충남사회서비스원 사회서비스 제공기관 경영 컨설팅 위원',
  '충청남도 민관협치 협의회 위원',
  '코레일테크(주) 고충심의위원',
  '코레일테크(주) 징계심의위원',
  '산림청 기타 공공기관 경영평가위원',
  '충남문화관광재단 전문상담위원',
  '중소벤처기업부 비즈니스지원단 상담위원',
  '충청남도 지속가능발전협의회 위원',
  '국가수리과학연구소 인권경영위원',
  '한국가스기술공사 감사심의위원',
  '한국가스기술공사 고충심의위원',
  '천안교도소 대체복무운영위원',
  '충청남도 물류정책위원',
];

export const pastRoles: string[] = [
  '행정안전부 산하기관 경영평가 위원',
  '노동위원회 국선노무사',
  '한국자동차연구원 고충심의위원',
  '충남과학기술진흥원 인사위원',
  '가축위생방역지원본부 징계심의위원',
  '수자원공사 면접심사위원',
  '도로교통안전관리(주) 면접심사위원',
  '한국공인노무사회 조정중재단 운영위원',
  '충청남도 정책자문위원',
  '천안시 청년정책네트워크 위원',
];

export interface LectureTopic {
  title: string;
  audience: string;
  points: string[];
  legal?: string; // 법정 의무교육 근거(확인된 것만)
}

export const lectureTopics: LectureTopic[] = [
  {
    title: '직장 내 괴롭힘·성희롱 예방 교육',
    audience: '공공기관·지자체·기업 전 직원, 관리자',
    points: ['판단 기준과 최근 사례', '신고 후 회사가 밟는 절차', '관리자가 피해야 할 말과 행동'],
    legal: '직장 내 성희롱 예방교육은 남녀고용평등법상 연 1회 의무. 괴롭힘 예방교육은 취업규칙·기관 지침에 따름',
  },
  {
    title: '직장 내 괴롭힘 조사 실무',
    audience: '고충처리 담당자, 감사·인사 부서, 조사위원',
    points: ['신고 접수부터 결과 통보까지의 순서', '조사 인터뷰와 기록 방법', '조사보고서 구성과 후속 조치'],
  },
  {
    title: '관리자를 위한 노동법',
    audience: '팀장·부서장, 신임 관리자',
    points: ['근로시간·연차·휴게의 운영 기준', '지시·평가·징계에서 지켜야 할 선', '기록이 남는 관리'],
  },
  {
    title: '중대재해처벌법과 안전보건관리체계',
    audience: '경영책임자, 안전보건 담당자',
    points: ['경영책임자의 의무 9가지', '위험성평가를 실제로 굴리는 방법', '산업안전감독 대응'],
  },
  {
    title: '노동관계법령 기초',
    audience: '사회복지시설·공공기관 신입 실무자, 청년·창업자',
    points: ['근로계약서와 임금명세서', '모성보호와 휴가', '산업안전과 산재 신청'],
  },
];
