import { useGetInvestmentAccountQuery } from "./Account-query/InvestmentAccount.query";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const InvestmentAccount = () => {
  const { data, isLoading, isError } = useGetInvestmentAccountQuery();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
        <TableBody>
          {data?.data.map((row: any) => (
            <TableRow
              key={row.user_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.user_id}
              </TableCell>
              <TableCell align="right">{row.broker_id}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.assets}</TableCell>
              <TableCell align="right">{row.payments}</TableCell>
              <TableCell align="right">{row.is_active}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvestmentAccount;
