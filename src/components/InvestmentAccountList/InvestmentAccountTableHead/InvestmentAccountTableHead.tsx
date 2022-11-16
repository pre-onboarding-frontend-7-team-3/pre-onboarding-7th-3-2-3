import { TableCell, TableHead, TableRow } from '@mui/material';

const InvestmentAccountTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">고객명</TableCell>
        <TableCell align="center">브로커명</TableCell>
        <TableCell align="center">계좌번호</TableCell>
        <TableCell align="center">계좌상태</TableCell>
        <TableCell align="center">계좌명</TableCell>
        <TableCell align="center">평가금액</TableCell>
        <TableCell align="center">입금금액</TableCell>
        <TableCell align="center">계좌활성화</TableCell>
        <TableCell align="center">계좌개설일</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default InvestmentAccountTableHead;
