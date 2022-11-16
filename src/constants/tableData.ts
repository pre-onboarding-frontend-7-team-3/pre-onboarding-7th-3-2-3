export const STATUS_FORMAT: { [key: string]: string | number } = {
  '': '선택안함',
  9999: '관리자확인필요',
  1: '입금대기',
  2: '운용중',
  3: '투자중지',
  4: '해지',
};

export const BROKERS_FORMAT: { [key: string]: string } = {
  '': '선택안함',
  '209': '유안타증권',
  '218': '현대증권',
  '230': '미래에셋증권',
  '238': '대우증권',
  '240': '삼성증권',
  '243': '한국투자증권',
  '247': '우리투자증권',
  '261': '교보증권',
  '262': '하이투자증권',
  '263': 'HMC투자증권',
  '264': '키움증권',
  '265': '이베스트투자증권',
  '266': 'SK증권',
  '267': '대신증권',
  '268': '아이엠투자증권',
  '269': '한화투자증권',
  '270': '하나대투자증권',
  '279': '동부증권',
  '280': '유진투자증권',
  '288': '카카오페이증권',
  '287': '메리츠종합금융증권',
  '290': '부국증권',
  '291': '신영증권',
  '292': 'LIG투자증권',
  '271': '토스증권',
};

export const IS_ACTIVE_FORMAT: { [key: string]: string } = {
  '': '선택안함',
  true: '활성화',
  false: '비활성화',
};

export const BROKER_FORMAT = {
  '209': '00-00000000-00',
  '218': '00-0000000-000',
  '230': '00-000000-0000',
  '238': '00-000-0000-000',
  '240': '00-0000-000000',
  '243': '00-000000000-0',
  '247': '00-0000-000000',
  '261': '00-00-00000000',
  '262': '00-0000000-000',
  '263': '00-0000-000000',
  '264': '00-0000-00-0000',
  '265': '00-000-000-0000',
  '266': '00-00000-00000',
  '267': '00-000-0000000',
  '268': '00-000000-00-00',
  '269': '00-00000-00000',
  '270': '00-000-0000000',
  '279': '00-00000-00000',
  '280': '00-0000-000000',
  '288': '00-00000000-00',
  '287': '00-0000-00000-0',
  '290': '00-000000-0000',
  '291': '00-0000-000000',
  '292': '00-00000-00000',
  '271': '00-000-0000000',
};

export const BROKER_LIST = [
  '유안타증권',
  '현대증권',
  '미래에셋증권',
  '대우증권',
  '삼성증권',
  '한국투자증권',
  '우리투자증권',
  '교보증권',
  '하이투자증권',
  'HMC투자증권',
  '키움증권',
  '이베스트투자증권',
  'SK증권',
  '대신증권',
  '아이엠투자증권',
  '한화투자증권',
  '하나대투자증권',
  '동부증권',
  '유진투자증권',
  '카카오페이증권',
  '메리츠종합금융증권',
  '부국증권',
  '신영증권',
  'LIG투자증권',
  '토스증권',
];

export const GENDER: { [key: string]: string } = {
  1: '남',
  2: '여',
  3: '남',
  4: '여',
};

export const USER_TABLE_CELL_DATA = [
  "고객명",
  "계좌수",
  "이메일 주소",
  "성별",
  "생년월일",
  "휴대폰 번호",
  "최근 로그인",
  "수신 동의",
  "게좌 활성화",
  "가입일",
];
