import { useQuery } from "@tanstack/react-query";
import InvestmentAccountRepository from "./InvestmentAccount.repository";

export const useGetAccountQuery = (accountQueryParams: any) => {
  // console.log("useQeury");
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
