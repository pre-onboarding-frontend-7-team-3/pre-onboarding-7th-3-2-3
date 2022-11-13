import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import clientAPI from '@src/libs/api/client';
import { useQuery } from '@tanstack/react-query';



export default function InvestmentAccountList() {


  const fetchAcList = async () => {
    return clientAPI.get("accounts")
  }

  const {data: AccountsList } = useQuery(["InvestAccount"], fetchAcList,)

  console.log(AccountsList?.data)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>고객명</TableCell>
            <TableCell align="right">브로커명</TableCell>
            <TableCell align="right">계좌번호</TableCell>
            <TableCell align="right">계좌상태</TableCell>
            <TableCell align="right">계좌명</TableCell>
            <TableCell align="right">평가금액</TableCell>
            <TableCell align="right">입금금액</TableCell>
            <TableCell align="right">계좌활성화여부</TableCell>
            <TableCell align="right">계좌계설일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {AccountsList?.data.map((list: any) => (
            <TableRow
              key={list.user_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {list.user_id}
              </TableCell>
              <TableCell align="right">{list.broker_id}</TableCell>
              <TableCell align="right">{list.number}</TableCell>
              <TableCell align="right">{list.status}</TableCell>
              <TableCell align="right">{list.name}</TableCell>
              <TableCell align="right">{list.assets}</TableCell>
              <TableCell align="right">{list.payments}</TableCell>
              <TableCell align="right">{list.is_active}</TableCell>
              <TableCell align="right">{list.created_at}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}