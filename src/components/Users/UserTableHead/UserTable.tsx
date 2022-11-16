import { TableCell, TableHead, TableRow } from "@mui/material";

const UserTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">고객명</TableCell>
        <TableCell align="center">계좌수</TableCell>
        <TableCell align="center">이메일 주소 </TableCell>
        <TableCell align="center">성별</TableCell>
        <TableCell align="center">생년월일</TableCell>
        <TableCell align="center">휴대폰 번호</TableCell>
        <TableCell align="center">최근로그인</TableCell>
        <TableCell align="center">수신 동의</TableCell>
        <TableCell align="center">계좌활성화</TableCell>
        <TableCell align="center">가입일</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default UserTableHead;
