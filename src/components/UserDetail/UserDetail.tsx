import { TableContainer, Table, Paper } from "@mui/material";
import InvestmentAccountItem from "../InvestmentAccountList/InvestmentAccountItem/InvestmentAccountItem";
import InvestmentAccountTableHead from "../InvestmentAccountList/InvestmentAccountTableHead/InvestmentAccountTableHead";
import UserDetailTableHead from "./UserDetailTableHead";
import UserDetailTableItem from "./UserDetailTableItem";
import useUserDetail from "./hooks/useUserDetail";

// TODO: any 수정
type Props = {
  id: any;
};

const UserDetail = ({ id }: Props) => {
  const results = useUserDetail(id);
  const isLoading = results.some((result) => result.isLoading);
  const [detailResult, accountsResult, settingResult] = results;
  const detail = detailResult.data?.data;
  const accounts = accountsResult.data;
  const setting = settingResult.data?.data;

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      {!isLoading && (
        <>
          <h1>사용자 정보</h1>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <UserDetailTableHead
                items={[
                  "이름",
                  "성별",
                  "생년월일",
                  "주소",
                  "이메일",
                  "핸드폰",
                  "혜택 정보 수신",
                  "활성화 여부",
                  "가입 날짜",
                  "최근 로그인",
                ]}
              />
              <UserDetailTableItem detail={detail} setting={setting} />
            </Table>
          </TableContainer>
          <h1>증권 계좌 목록</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <InvestmentAccountTableHead />
              <InvestmentAccountItem data={accounts} />
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default UserDetail;

/*
  // const accountsData = {
  //   data: {
  //     user: {
  //       id: 1,
  //     },
  //     ...accounts,
  //   },
  // };
  //const { data, isLoading, isError } = useUserDetail(id);
*/
