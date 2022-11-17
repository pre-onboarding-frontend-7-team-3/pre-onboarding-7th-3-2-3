import { useQuery, useQueryClient } from "@tanstack/react-query";
import InvestmentAccountRepository from "./InvestmentAccount.repository";

export const useGetAccountQuery = (accountQueryParams: any) => {
  return useQuery(
    ["GetInvestmentAccount", accountQueryParams],
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

export const usePrefetchAccountQuery = (accountQueryParams: any) => {
  const queryClient = useQueryClient();
  const accountPrefetchQueryParams = {
    ...accountQueryParams,
    pageNum: accountQueryParams.pageNum + 1,
  };
  return queryClient.fetchQuery(
    ["GetInvestmentAccount", accountPrefetchQueryParams],
    () => {
      return InvestmentAccountRepository.getInvestmentAccount(
        accountPrefetchQueryParams
      );
    }
  );
};
