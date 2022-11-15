export const STATE_DATA = [
  { id: 1, name: "입금대기" },
  { id: 2, name: "운용중" },
  { id: 3, name: "투자중지" },
  { id: 4, name: "해지" },
  { id: 9999, name: "관리자확인필요" },
];

export interface StateData {
  id: number;
  name: string;
}
