

import { accountQueryParamsAtom } from "./atoms";
import { useAtom } from "jotai";
import styled from "styled-components";
import { Table, TableContainer, Paper,Button } from "@mui/material";
import {
  useGetAccountQuery,
  usePrefetchAccountQuery,
} from "@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query";
import InvestmentAccountItem from "./InvestmentAccountItem/InvestmentAccountItem";

import Dropdown from "../common/Dropdown/Dropdown";
import SearchInput from "../common/SearchInput/SearchInput";
import PagenationButton from "../common/PagenationButton/PagenationButton";
import { DROPDOWN_DATA } from "@src/constants/dropDownData";
import Loader from "../common/Loader/Loader";
import CustomTableHead from "../common/Table/CustomTableHead";
import { ACCOUNT_TABLE_CELL_DATA } from "@src/constants/tableData";

import * as S from "../UserList/UserList.style";


const InvestmentAccountList = () => {
  const [accountQueryParams, setAccountQueryParams] = useAtom(
    accountQueryParamsAtom
  );

  const {
    data: defaultAccountListData,
    isLoading,
    isError,
  } = useGetAccountQuery(accountQueryParams);

  const isMaxPage = usePrefetchAccountQuery(accountQueryParams).data?.data.length
  
  const handlePageNum = (num: number) => {
    setAccountQueryParams(prev => {
      return {
        ...prev,
        pageNum: num,
      };
    });
  };

  const initDropDownFilters = () => {
    setAccountQueryParams({
      pageNum: 1,
    });
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <>
        <h3>error...</h3>
      </>
    );

  return (
    <>

      <S.Container>
        <S.FilterContainer>
          <SearchInput
            onUpdateParams={setAccountQueryParams}
            text="계좌명 검색"
          />
          {DROPDOWN_DATA.map(({ id, name, data }) => (
            <Dropdown
              accountQueryParams={accountQueryParams}
              key={id}
              setAccountQueryParams={setAccountQueryParams}
              name={name}
              data={data}
            />
          ))}
          <Button
            sx={{ margin: "8px" }}
            variant="contained"
            onClick={initDropDownFilters}
          >
            필터링 초기화
          </Button>
        </S.FilterContainer>
      </S.Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <CustomTableHead data={ACCOUNT_TABLE_CELL_DATA} />
          <InvestmentAccountItem data={defaultAccountListData} />
        </Table>
      </TableContainer>
      <PagenationButton
        currentPage={accountQueryParams.pageNum}
        isMaxPage={isMaxPage}
        handlePageNum={handlePageNum}
      />
    </>
  );
};

export default InvestmentAccountList;

const Container = styled.div`
  ${({ theme }) => theme.flexDefault}
`;
