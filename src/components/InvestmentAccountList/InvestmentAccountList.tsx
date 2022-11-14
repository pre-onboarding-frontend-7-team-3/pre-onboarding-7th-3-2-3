import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQueryClient } from '@tanstack/react-query';

import { Table, TableBody, TableContainer, Paper } from '@mui/material';

import InvestmentAccountItem from './InvestmentAccountItem/InvestmentAccountItem';
import { useGetAccountQuery } from '@src/components/InvestmentAccountList/Account-query/InvestmentAccount.query';
import { useGetFilteredAccountQuery } from './Account-query/FilteredInvestmentAccount.query';
import InvestmentAccountRepository from './Account-query/InvestmentAccount.repository';
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

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage < maxPage) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['GetInvestmentAccount', nextPage], () => {
        return InvestmentAccountRepository.getInvestmentAccount(
          nextPage,
          maxPage
        );
      });
    }
  }, [currentPage, queryClient]);

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
      <SearchInput value={keyword} onChange={e => setKeyword(e.target.value)} />
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

const SearchInput = styled.input`
  width: 180px;
  border: 1px solid grey;
`;
