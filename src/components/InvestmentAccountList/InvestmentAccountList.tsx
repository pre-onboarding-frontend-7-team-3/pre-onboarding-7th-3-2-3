import { accountQueryParamsAtom } from "./atoms";
import { useAtom } from "jotai";
import styled from "styled-components";
import { Table, TableContainer, Paper } from "@mui/material";
import {
  useGetAccountQuery,
  usePrefetchAccountQuery,
} from "@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query";
import InvestmentAccountTableHead from "./InvestmentAccountTableHead/InvestmentAccountTableHead";
import InvestmentAccountItem from "./InvestmentAccountItem/InvestmentAccountItem";

import Dropdown from "../common/Dropdown/Dropdown";
import SearchInput from "../common/SearchInput/SearchInput";
import PagenationButton from "./PagenationButton/PagenationButton";
import { DROPDOWN_DATA } from "@src/constants/dropDownData";

const InvestmentAccountList = () => {
  const [accountQueryParams, setAccountQueryParams] = useAtom(
    accountQueryParamsAtom
  );

  const {
    data: defaultAccountListData,
    isLoading,
    isError,
  } = useGetAccountQuery(accountQueryParams);

  const {data : nextPage, isLoading2} = usePrefetchAccountQuery(accountQueryParams);

  const maxPage = defaultAccountListData?.data?.length;

  const handlePageNum = (num: number) => {
    setAccountQueryParams((prev) => {
      return {
        ...prev,
        pageNum: num,
      };
    });
  };

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>error...</h3>
      </>
    );
  console.log(nextPage, isLoading2);

  return (
    <>
      <Container>
        <SearchInput
          onUpdateParams={setAccountQueryParams}
          text="계좌명 검색"
        />
        {DROPDOWN_DATA.map(({ id, name, data }) => (
          <Dropdown
            key={id}
            accountQueryParams={accountQueryParams}
            setAccountQueryParams={setAccountQueryParams}
            name={name}
            data={data}
          />
        ))}
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <InvestmentAccountTableHead pageType="InvestmentAccounts" />
          <InvestmentAccountItem data={defaultAccountListData} />
        </Table>
      </TableContainer>
      <PagenationButton
        currentPage={accountQueryParams.pageNum}
        maxPage={maxPage}
        handlePageNum={handlePageNum}
      />
    </>
  );
};

export default InvestmentAccountList;

const Container = styled.div`
  ${({ theme }) => theme.flexDefault}
`;
