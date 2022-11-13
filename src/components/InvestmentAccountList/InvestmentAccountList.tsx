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



export default function InvestmentAccountList() {

//계좌 전체목록 불러오기
  const fetchAcList = async () => {
    return clientAPI.get("accounts")
  }
   const {data: AccountsList } = useQuery(["InvestAccount"], fetchAcList,)

  console.log(AccountsList?.data)

  //브로커명 비교

  const brokers = {
    "209": "유안타증권",
  "218": "현대증권",
  "230": "미래에셋증권",
  "238": "대우증권",
  "240": "삼성증권",
  "243": "한국투자증권",
  "247": "우리투자증권",
  "261": "교보증권",
  "262": "하이투자증권",
  "263": "HMC투자증권",
  "264": "키움증권",
  "265": "이베스트투자증권",
  "266": "SK증권",
  "267": "대신증권",
  "268": "아이엠투자증권",
  "269": "한화투자증권",
  "270": "하나대투자증권",
  "279": "동부증권",
  "280": "유진투자증권",
  "288": "카카오페이증권",
  "287": "메리츠종합금융증권",
  "290": "부국증권",
  "291": "신영증권",
  "292": "LIG투자증권",
  "271": "토스증권"
  }






//   let brk = JSON.stringify(brokers)
//   let fil = AccountsList?.data?.filter((name:any)=>{
//    const a =name.broker_id.includes(brokers)
//    return console.log(a)
//   })


//계좌번호 자르기
const acNum = (num:any) => {
   return num.slice(0,2)+"*".repeat(num.slice(2,-2))+num.slice(-2, num.length)
}
// let ac:string = "74321730141"


// const sil = ac.slice(0,2)
// const sil2 = ac.slice(2,-2)

// console.log(sil, sil2)


  
  
  


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
          {AccountsList?.data?.map((list: any, idx:number) => (

            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {list.user_id}
              </TableCell>
              <TableCell align="right">{list.broker_id}</TableCell>
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