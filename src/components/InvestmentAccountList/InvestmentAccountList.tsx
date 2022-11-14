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
import { options } from '@src/libs/api/options';
import Spinner from '../UI/Spinner';
import { ListItem } from '@mui/material';
import Paging from './Paging';
import { typeOf } from 'react-is';


const  InvestmentAccountList=()=> {

    const fetchAcList = async () => {
    return clientAPI.get("accounts")
  }


    const {data: AccountsList, isLoading:loadingList } = useQuery(["InvestAccount"], fetchAcList, options.eternal)

console.log(typeOf(AccountsList))

    //브로커명 찾기
    function getBrokerNm(object, key) {
        return Object.values(object).find(value => object[key] === value);
      }

     const broker = {
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

      //계좌상태 
      const Acstatus = { "관리자확인필요": 9999, "입금대기": 1, "운용중": 2, "투자중지": 3, "해지": 4 }
      function getAcStatus(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
  


//계좌번호 자르기

const acNum = (num:any) => {
   return num?.slice(0,2)+ "*".repeat(num?.length - 4)+num?.slice(-2, num?.length)
}

  
  
//로딩 시 스피너
if (loadingList) return <Spinner />

//페이지네이션
const [posts, setPosts] = React.useState([]);
const [currentPosts, setCurrentPosts] = React.useState([])
const [page, setPage] = React.useState(1);
const handlePageChange = (page:number) => {setPage(page)}
const postPerPage:number = 7
const indexofLastPost:number = page * postPerPage;
const indexofFirstPost = indexofLastPost - postPerPage;

React.useEffect(()=>{
    // setPosts([...AccountsList])
    setCurrentPosts(AccountsList?.slice(indexofFirstPost, indexofLastPost))
},[indexofFirstPost, indexofLastPost, page])
  return (
    <>
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
          {currentPosts?.map((list: any, idx:number) => (

            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {User[idx].find(list.user_id).name} */}
              </TableCell>
              <TableCell align="right" >{getBrokerNm(broker, list.broker_id)}</TableCell>
              <TableCell align="right">{acNum(list.number)}</TableCell>
              <TableCell align="right">{getAcStatus(Acstatus, list.status)}</TableCell>
              <TableCell align="right">{list.name}</TableCell>
              <TableCell align="right">{list.assets.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right">{list.payments.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              <TableCell align="right">{list.is_active ? "Y" : "N"}</TableCell>
              <TableCell align="right">{list.created_at}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Paging totalCount={AccountsList?.length} page={page} postPerPage={postPerPage} pageRangeDisplay={5} setPage={setPage}/>
    </>
  );
}

export default InvestmentAccountList;