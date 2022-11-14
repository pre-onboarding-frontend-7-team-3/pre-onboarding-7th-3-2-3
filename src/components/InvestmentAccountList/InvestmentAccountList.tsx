import { useState, useMemo } from 'react';
import styled from 'styled-components';

import { Table, TableContainer, Paper } from '@mui/material';

import { useGetAccountQuery } from '@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query';
import { useGetFilteredAccountQuery } from './Account-query/FilteredInvestmentAccount.query';
import usePrefetchAccountList from './hooks/usePrefetchAccountList';
import InvestmentAccountTableHead from './InvestmentAccountTableHead/InvestmentAccountTableHead';
import InvestmentAccountItem from './InvestmentAccountItem/InvestmentAccountItem';
import SearchInput from './component/SearchInput';
import DropDown from './component/DropDown';
import PagenationButton from './component/PagenationButton';
import FilterButton from './component/FilterButton';
import { BROKERS_FORMAT } from '@src/constants/tableData';

const maxPage = 18;

const InvestmentAccountList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [accountInfo, setAccountInfo] = useState({
    brokerList: '-',
  });

  const {
    data: defaultAccountListData,
    isLoading,
    isError,
  } = useGetAccountQuery(currentPage, maxPage);

  const { data: filteredAccountListData } = useGetFilteredAccountQuery(keyword);

  usePrefetchAccountList(currentPage, maxPage);

  const handleCurrentPagePlus = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleCurrentPageMinus = () => {
    setCurrentPage(prev => prev - 1);
  };

  const brokerListData = useMemo(() => {
    const result = [];
    for (const [key, value] of Object.entries(BROKERS_FORMAT)) {
      result.push({
        label: value,
        value: key,
        callbackFn: () => {
          setAccountInfo(prevState => ({
            ...prevState,
            brokerList: value,
          }));
        },
      });
    }
    return result;
  }, []);

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
      <Container>
        <SearchInput keyword={keyword} setKeyword={setKeyword} />
        <DropDown dropDownData={brokerListData} />
        <DropDown dropDownData={brokerListData} />
        <DropDown dropDownData={brokerListData} />
      </Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <InvestmentAccountTableHead />
          <InvestmentAccountItem
            data={filteredAccountListData || defaultAccountListData}
          />
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

const Container = styled.div`
  ${({ theme }) => theme.flexDefault}
`;
