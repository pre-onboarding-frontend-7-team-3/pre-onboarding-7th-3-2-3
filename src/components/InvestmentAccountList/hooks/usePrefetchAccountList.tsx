import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import InvestmentAccountRepository from '../Account-query/InvestmentAccount.repository';

interface Props {
  currentPage: number;
  maxPage: number;
}
const usePrefetchAccountList = ({ currentPage, maxPage }: Props) => {
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
};

export default usePrefetchAccountList;
