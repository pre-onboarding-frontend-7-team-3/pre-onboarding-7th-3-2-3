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
import { stringify } from 'querystring';
import { useNavigate } from 'react-router';
import { options } from '@src/libs/api/options';
import Spinner from '../UI/Spinner';



export default function InvestmentAccountList() {

//계좌 전체목록 불러오기
  const fetchAcList = async () => {
    return clientAPI.get("accounts")
  }
   const {data: AccountsList, isLoading:loadingList } = useQuery(["InvestAccount"], fetchAcList, options.eternal)

  console.log(AccountsList)

  


//계좌번호 자르기
const acNum = (num:any) => {
   return num.slice(0,2)+"*".repeat(num.slice(2,-2))+num.slice(-2, num.length)
}

  const navigate = useNavigate();
  const goDetail = (user_id:number) =>{
    navigate(`/users${user_id}`)
  }
  
  
  
//로딩 시 스피너
if (loadingList) return <Spinner />
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
          {AccountsList?.map((list: any, idx:number) => (

            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {list.user_id}
              </TableCell>
              <TableCell align="right" >{list.broker_id}</TableCell>
              <TableCell align="right">{list.number
              }</TableCell>
              <TableCell align="right">{list.status}</TableCell>
              <TableCell align="right">{list.name}</TableCell>
              <TableCell align="right">{list.assets}</TableCell>
              <TableCell align="right">{list.payments}</TableCell>
              <TableCell align="right">{list.is_active ? "Y" : "N"}</TableCell>
              <TableCell align="right">{list.created_at}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}