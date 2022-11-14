import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { useGetAccountQuery } from "@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query";
import InvestmentAccountRepository from "./Account-query/InvestmentAccount.repository";
import PagenationButton from "./component/PagenationButton";
import { changeDotToComma, maskingAccountNumber } from "@src/utils/processData";
import { ACCOUNT_STATUS, BROKERS_FORMAT } from "@src/constants/tableData";
import FilterButton from "./component/FilterButton";

const maxPage = 18;

const InvestmentAccountList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useGetAccountQuery(currentPage, maxPage);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(["GetInvestmentAccount", nextPage], () => {
        return InvestmentAccountRepository.getInvestmentAccount(
          nextPage,
          maxPage
        );
      });
    }
  }, [currentPage, queryClient]);

  const handleCurrentPagePlus = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleCurrentPageMinus = () => {
    setCurrentPage((prev) => prev - 1);
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>error...</h3>
      </>
    );

  return (
    <>
      <FilterButton />

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
            {data?.data.map((row: any, idx: number) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.user.name}
                </TableCell>
                <TableCell align="center">
                  {BROKERS_FORMAT[row.broker_id]}
                </TableCell>
                <TableCell align="center">
                  {maskingAccountNumber(row.number)}
                </TableCell>
                <TableCell align="center">
                  {ACCOUNT_STATUS[row.status]}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  {changeDotToComma(row.assets)}
                </TableCell>
                <TableCell align="center">
                  {changeDotToComma(row.payments)}
                </TableCell>
                <TableCell align="center">
                  {row.is_active ? "활성화" : "비활성화"}
                </TableCell>
                <TableCell align="center">
                  {row.created_at.split("").slice(0, 10)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <PagenationButton
        currentPage={currentPage}
        maxPage={maxPage}
        handleCurrentPagePlus={handleCurrentPagePlus}
        handleCurrentPageMinus={handleCurrentPageMinus}
      />
    </>
  );
};

export default InvestmentAccountList;
