// 세 채널(법인 인사이트·개인 블로그·산재 사이트)의 글을 한 목록으로 모은다.
// 새 글을 발행하면 맨 앞에 한 줄 추가한다(/publish 절차에 포함). 제목은 발행본 그대로.

export type Channel = 'insight' | 'blog' | 'sanjae';
export type Field = '산업안전' | '산재보상' | '직장 내 괴롭힘' | '인사·노무' | '해고·징계' | 'HR컨설팅' | '근로감독';

export interface Writing {
  title: string;
  url: string;
  date: string; // YYYY-MM-DD
  channel: Channel;
  field: Field;
  summary: string;
}

export const channelLabel: Record<Channel, string> = {
  insight: '노무법인 전승 인사이트',
  blog: '전지나 노무사 블로그',
  sanjae: '산재보상 안내',
};

export const fields: Field[] = ['산업안전', '산재보상', '직장 내 괴롭힘', '인사·노무', '해고·징계', 'HR컨설팅', '근로감독'];

export const writings: Writing[] = [
  {
    title: '소음성 난청 산재 인정기준 — 85데시벨·3년·40데시벨은 무엇을 뜻하나요?',
    url: 'https://sanjae.jinanomu.com/posts/noise-hearing-loss-disability-benefit/',
    date: '2026-09-30',
    channel: 'sanjae',
    field: '산재보상',
    summary: '소음성 난청 인정기준의 세 숫자와 퇴직 후 청구, 장해등급 판정 방법을 정리했습니다.',
  },
  {
    title: '2026년 근로감독, 무엇이 달라졌나 — 천안·아산 사업주가 지금 준비할 것',
    url: 'https://jeonseung.co.kr/insights/geunro-gamdok-2026-cheonan-asan-junbi/',
    date: '2026-09-30',
    channel: 'insight',
    field: '근로감독',
    summary: '2026년 감독계획 9만 개소, 12월 시행 노동감독관 직무집행법, 지방정부 노동감독 준비 상황과 점검 7가지.',
  },
  {
    title: '소규모 사업장(30인 미만)도 근로감독 대상인가요?',
    url: 'https://blog.jinanomu.com/labor-inspection-small-business-under-30/',
    date: '2026-09-30',
    channel: 'blog',
    field: '근로감독',
    summary: '30인 미만 사업장이 감독 대상이 되는 경로와 지금 준비할 서류를 정리했습니다.',
  },
  {
    title: '급여 아웃소싱 맡길 때 확인할 것｜4대보험·급여계산·임금명세서',
    url: 'https://blog.jinanomu.com/payroll-outsourcing-checklist/',
    date: '2026-09-29',
    channel: 'blog',
    field: '인사·노무',
    summary: '급여 대행을 맡기기 전 확인할 범위·책임·임금명세서 요건.',
  },
  {
    title: '직업성 암 산재 인정기준｜폐암·백혈병, 어떤 노출이 인정되나',
    url: 'https://jeonseung.co.kr/insights/jikeopseong-am-sanjae-injeong-gijun/',
    date: '2026-09-29',
    channel: 'insight',
    field: '산재보상',
    summary: '시행령이 정한 물질과 대표 작업, 노출기간·경과기간, 퇴직·폐업 후 자료 확보와 유족 청구.',
  },
  {
    title: '산재 사망 유족급여·장의비 청구 방법｜신청 절차와 청구기한',
    url: 'https://blog.jinanomu.com/sanjae-death-survivor-benefit/',
    date: '2026-09-28',
    channel: 'blog',
    field: '산재보상',
    summary: '과로사·직업성 암 사망 시 유족이 준비할 서류와 청구 순서, 기한.',
  },
  {
    title: '부당해고 구제신청 3개월 기한, 절차와 준비서류 총정리',
    url: 'https://jeonseung.co.kr/insights/budanghaego-guje-sincheong-3gaewol/',
    date: '2026-09-28',
    channel: 'insight',
    field: '해고·징계',
    summary: '기산일 계산, 신청 자격과 서류, 접수 후 절차와 화해, 재심·행정소송 불복 기한.',
  },
  {
    title: '대표가 직장 내 괴롭힘 행위자로 신고됐다면 — 조사를 누구에게 맡겨야 하나',
    url: 'https://jeonseung.co.kr/insights/harassment-employer-self-investigation/',
    date: '2026-09-23',
    channel: 'insight',
    field: '직장 내 괴롭힘',
    summary: '2026년 7월 개정 매뉴얼의 셀프조사 방지 권고, 조사자 선정과 보고 경로, 보호조치, 과태료.',
  },
  {
    title: '직원 해고 전 확인할 절차 — 서면통지와 30일 예고는 다릅니다',
    url: 'https://blog.jinanomu.com/dismissal-procedure-employer/',
    date: '2026-09-23',
    channel: 'blog',
    field: '해고·징계',
    summary: '해고 서면통지와 해고예고의 차이, 사업주가 놓치기 쉬운 절차.',
  },
  {
    title: '임금체불 처벌, 2026년 10월 8일부터 강화 — 지급기일·합의·지연이자 점검',
    url: 'https://jeonseung.co.kr/insights/imgeum-chebul-cheobeol-2026/',
    date: '2026-09-22',
    channel: 'insight',
    field: '인사·노무',
    summary: '법정형 상향, 반의사불벌 규정 변화, 지급기일 연장 합의와 지연이자, 상습체불 제재.',
  },
  {
    title: '성과가 낮은 직원, 평가제도부터 살펴야 하는 이유',
    url: 'https://blog.jinanomu.com/low-performer-evaluation-system/',
    date: '2026-09-21',
    channel: 'blog',
    field: 'HR컨설팅',
    summary: '저성과자 대응 전에 평가제도가 갖춰야 할 요건.',
  },
  {
    title: '권고사직 제안을 받았다면 — 사직서에 서명하기 전에 확인할 것',
    url: 'https://jeonseung.co.kr/insights/gwongosajik-budanghaego/',
    date: '2026-09-18',
    channel: 'insight',
    field: '해고·징계',
    summary: '서명 전 확인할 조건과 기록, 철회 시점, 부당해고로 다툴 수 있는 예외와 기한.',
  },
  {
    title: '소음성 난청 산재, 퇴직하고 몇 년이 지나도 장해급여를 받을 수 있나요?',
    url: 'https://blog.jinanomu.com/noise-induced-hearing-loss-disability-benefit/',
    date: '2026-09-17',
    channel: 'blog',
    field: '산재보상',
    summary: '퇴직 후 오랜 시간이 지난 소음성 난청의 장해급여 청구 가능성.',
  },
  {
    title: '취업규칙 작성·변경, 직원 동의는 언제 필요할까요? — 10인 이상 사업장 점검사항',
    url: 'https://blog.jinanomu.com/work-rules-drafting-amendment-procedure/',
    date: '2026-09-15',
    channel: 'blog',
    field: '인사·노무',
    summary: '취업규칙 신고 의무와 불이익 변경 시 동의 절차.',
  },
  {
    title: '뇌출혈·심근경색 산재, 주 60시간 미만이면 인정받기 어렵나요?',
    url: 'https://jeonseung.co.kr/insights/noesimhyeolgwan-sanjae-geunrosigan/',
    date: '2026-09-14',
    channel: 'insight',
    field: '산재보상',
    summary: '업무시간 기준과 그 아래여도 검토되는 가중요인 7가지, 야간근무 가산, 청구 시효.',
  },
  {
    title: '직장 내 괴롭힘 조사 절차와 외부 조사를 검토할 5가지 상황',
    url: 'https://blog.jinanomu.com/harassment-formal-investigation-procedure-external-investigator/',
    date: '2026-09-14',
    channel: 'blog',
    field: '직장 내 괴롭힘',
    summary: '정식 조사의 순서와 외부 조사자에게 맡기는 편이 나은 상황.',
  },
  {
    title: '위험성평가 과태료 사전통지서를 받았다면 — 회사가 먼저 확인할 것과 90일 안에 할 일',
    url: 'https://blog.jinanomu.com/risk-assessment-fine-company-response/',
    date: '2026-09-11',
    channel: 'blog',
    field: '산업안전',
    summary: '사전통지서의 근거 조항 확인, 의견 제출과 감경, 이의 제기 기한.',
  },
  {
    title: '퇴직 압박으로 생긴 우울증·적응장애, 괴롭힘이 아니어도 산재가 되나요?',
    url: 'https://jeonseung.co.kr/insights/jeongsin-jilhwan-sanjae-toejik-apbak/',
    date: '2026-09-10',
    channel: 'insight',
    field: '산재보상',
    summary: '뚜렷한 사건이 없어도 업무상 스트레스로 생긴 정신질환의 산재 인정 기준과 유리한 기록.',
  },
  {
    title: '직장 내 괴롭힘 익명 신고, 회사의 조사 의무와 초기 대응',
    url: 'https://blog.jinanomu.com/harassment-anonymous-report-company-response/',
    date: '2026-09-09',
    channel: 'blog',
    field: '직장 내 괴롭힘',
    summary: '익명 신고에도 조사 의무가 생기는지, 첫 일주일에 할 일.',
  },
  {
    title: '산재 불승인 통지를 받았다면 — 90일 안에 해야 할 일',
    url: 'https://jeonseung.co.kr/insights/sanjae-bulseungin-90il/',
    date: '2026-09-08',
    channel: 'insight',
    field: '산재보상',
    summary: '불승인 사유별 대응 방향, 심사청구·재심사청구·취소소송의 선택지와 기한.',
  },
];

export const recentWritings = (n = 6) => writings.slice(0, n);
