import { useQuery } from "@tanstack/react-query";
import InvestmentAccountRepository from "./InvestmentAccount.repository";

export const useGetAccountQuery = (currentPage: number, maxPage: number) => {
  return useQuery(
    ["GetInvestmentAccount", currentPage],
    () =>
      InvestmentAccountRepository.getInvestmentAccount(currentPage, maxPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};
