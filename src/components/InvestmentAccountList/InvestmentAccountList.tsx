import { accountQueryParamsAtom } from "./atoms";
import { useAtom } from "jotai";
const PARAMETER_KEYS = {
  keyword: "",
  broker_id: "",
  is_active: "",
  status: "",
};

import styled from "styled-components";
import { Table, TableContainer, Paper } from "@mui/material";
import { useGetAccountQuery } from "@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query";
import InvestmentAccountTableHead from "./InvestmentAccountTableHead/InvestmentAccountTableHead";
import InvestmentAccountItem from "./InvestmentAccountItem/InvestmentAccountItem";
import SearchInput from "./component/SearchInput";
import Dropdown from "./Dropdown/Dropdown";
import PagenationButton from "./component/PagenationButton";
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

  const maxPage = defaultAccountListData?.data?.length;

  const handleCurrentPage = (num: number) => {
    setAccountQueryParams((prev) => {
      return {
        ...prev,
        pageLimit: num,
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

  return (
    <>
      <Container>
        <SearchInput onUpdateParams={setAccountQueryParams} />
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
          <InvestmentAccountTableHead />
          <InvestmentAccountItem data={defaultAccountListData} />
        </Table>
      </TableContainer>
      <PagenationButton
        currentPage={accountQueryParams.pageLimit}
        maxPage={maxPage}
        handleCurrentPage={handleCurrentPage}
      />
    </>
  );
};

export default InvestmentAccountList;

const Container = styled.div`
  ${({ theme }) => theme.flexDefault}
`;