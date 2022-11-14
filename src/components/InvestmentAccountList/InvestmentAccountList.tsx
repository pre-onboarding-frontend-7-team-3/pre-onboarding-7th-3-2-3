import { useState } from 'react';
import styled from 'styled-components';

import { Table, TableContainer, Paper } from '@mui/material';

import InvestmentAccountItem from './InvestmentAccountItem/InvestmentAccountItem';
import { useGetAccountQuery } from '@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query';
import { useGetFilteredAccountQuery } from './Account-query/FilteredInvestmentAccount.query';
import usePrefetchAccountList from './hooks/usePrefetchAccountList';
import SearchInput from './component/SearchInput';
import PagenationButton from './component/PagenationButton';
import FilterButton from './component/FilterButton';
import InvestmentAccountTableHead from './InvestmentAccountTableHead/InvestmentAccountTableHead';

const maxPage = 18;

const InvestmentAccountList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');

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
      <SearchInput keyword={keyword} setKeyword={setKeyword} />
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
