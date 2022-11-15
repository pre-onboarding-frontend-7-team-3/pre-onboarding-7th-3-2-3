import { useQuery } from '@tanstack/react-query';
import InvestmentAccountRepository from './InvestmentAccount.repository';

export const useGetAccountQuery = (accountQueryParams, currentPage: number) => {
  console.log('useQeury');
  return useQuery(
    ['GetInvestmentAccount', accountQueryParams],
    async () => {
      return await InvestmentAccountRepository.getInvestmentAccount(
        accountQueryParams,
        currentPage
      );
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};
