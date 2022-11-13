import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import clientAPI from "@src/libs/api/client"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import Spinner from '../UI/Spinner';
import { options } from '@src/libs/api/options';

const UserInfo= () =>{
  
    //사용자목록 불러오기
    const fetchUser = async() =>{
      return clientAPI.get(`users`)
    }
  
  const {data: User, isLoading: loadingUser } = useQuery(["userInfo"],fetchUser, options.eternal)
    console.log("유저", User)

    //휴대폰번호 가리기
    const hide_Phnumbers = (phone_number:string) =>{
       return  phone_number?.slice(0,3) + "****".replace(phone_number?.substr(4,4),4)+ phone_number?.slice(-4)
      }

      console.log()


      //로딩 시 스피너
      if(loadingUser) return <Spinner />
  
    
    return (<TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>고객명</TableCell>
              {/* <TableCell align="right">고객명</TableCell> */}
              <TableCell align="right">보유 계좌수</TableCell>
              <TableCell align="right">이메일</TableCell>
              <TableCell align="right">성별</TableCell>
              <TableCell align="right">생년월일</TableCell>
              <TableCell align="right">휴대폰번호</TableCell>
              <TableCell align="right">최근 로그인</TableCell>
              <TableCell align="right">혜택 수신 동의 여부</TableCell>
              <TableCell align="right">활성화 여부</TableCell>
              <TableCell align="right">가입일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {User?.map((users: any, idx:number) => (
  
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {users.name}
                </TableCell>
                <TableCell align="right" >{"보유계좌정제필"}</TableCell>
                <TableCell align="right">{users.email
                }</TableCell>
                <TableCell align="right">{users.gender_origin}</TableCell>
                <TableCell align="right">{users.birth_date}</TableCell>
                <TableCell align="right">{hide_Phnumbers(users?.phone_number)}</TableCell>
                <TableCell align="right">{users.last_login}</TableCell>
                <TableCell align="right">{"혜택 수신여부 정제필"}</TableCell>
                <TableCell align="right">{"활성화여부 정제필"}</TableCell>
                <TableCell align="right">{users.create_at}</TableCell>
  
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)
}

export default UserInfo;