import { TableCell, TableHead, TableRow } from '@mui/material';

const InvestmentAccountTableHead = ({ pageType }: { pageType: any }) => {
  const TableType =
    pageType === "UserDetail"
      ? [
          "브로커명",
          "계좌번호",
          "계좌상태",
          "계좌명",
          "평가금액",
          "입금금액",
          "계좌활성화",
          "계좌개설일",
        ]
      : [
          "고객명",
          "브로커명",
          "계좌번호",
          "계좌상태",
          "계좌명",
          "평가금액",
          "입금금액",
          "계좌활성화",
          "계좌개설일",
        ];

  return (
    <TableHead>
      <TableRow>
        {TableType.map((type, idx) => {
          return (
            <TableCell key={idx} align="center">
              {type}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default InvestmentAccountTableHead;
