import { useQuery } from "@tanstack/react-query";
import InvestmentAccountRepository from "./InvestmentAccount.repository";

export const useGetInvestmentAccountQuery = () => {
  return useQuery(["GetInvestmentAccount"], () =>
    InvestmentAccountRepository.getInvestmentAccount()
  );
};
