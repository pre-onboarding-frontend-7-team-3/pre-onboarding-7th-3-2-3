import { useState } from "react";
import styled from "styled-components";
import { Table, TableContainer, Paper } from "@mui/material";
import { useGetAccountQuery } from "@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query";
import usePrefetchAccountList from "./hooks/usePrefetchAccountList";
import InvestmentAccountTableHead from "./InvestmentAccountTableHead/InvestmentAccountTableHead";
import InvestmentAccountItem from "./InvestmentAccountItem/InvestmentAccountItem";
import SearchInput from "./component/SearchInput";
import Dropdown from "./Dropdown/Dropdown";
import PagenationButton from "./component/PagenationButton";
import { DROPDOWN_DATA } from "@src/constants/dropDownData";

const PARAMETER_KEYS = {
  keyword: "",
  broker_id: "",
  is_active: "",
  status: "",
};

const InvestmentAccountList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [accountQueryParams, setAccountQueryParams] = useState({
    pageLimit: currentPage,
  });
  const {
    data: defaultAccountListData,
    isLoading,
    isError,
  } = useGetAccountQuery(accountQueryParams);

  // const maxPage = Math.floor(defaultAccountListData?.data?.length / 20) + 1;
  const maxPage = defaultAccountListData?.data?.length;

  // usePrefetchAccountList(currentPage, maxPage);
  console.log(accountQueryParams);

  
  
  const handleCurrentPage = (num: number) => {    
    setCurrentPage(num)
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
        <SearchInput 
        setCurrentPage={setCurrentPage}
        setAccountQueryParams={setAccountQueryParams} />
        {DROPDOWN_DATA.map(({ id, name, data }) => (
          <Dropdown
            key={id}
            accountQueryParams={PARAMETER_KEYS}
            setCurrentPage={setCurrentPage}
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
        currentPage={currentPage}
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
