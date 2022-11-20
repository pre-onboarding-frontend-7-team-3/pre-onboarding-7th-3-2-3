import { useQuery } from '@tanstack/react-query';
import InvestmentAccountRepository from './Account.repository';
import { InvestmentAccountProps } from './Account.model';

export const useGetAccountQuery = (
  accountQueryParams: InvestmentAccountProps
) => {
  return useQuery(
    ['GetInvestmentAccount', accountQueryParams],
    () => {
      return InvestmentAccountRepository.getInvestmentAccount(
        accountQueryParams
      );
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};

export const usePrefetchAccountQuery = (
  accountQueryParams: InvestmentAccountProps
) => {
  const accountPrefetchQueryParams = {
    ...accountQueryParams,
    pageNum: accountQueryParams.pageNum + 1,
  };
  return useQuery(
    ['GetInvestmentAccount', accountPrefetchQueryParams],
    () => {
      return InvestmentAccountRepository.getInvestmentAccount(
        accountPrefetchQueryParams
      );
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};
