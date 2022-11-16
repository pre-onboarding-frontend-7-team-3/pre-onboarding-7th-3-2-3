import { useQuery } from "@tanstack/react-query";
import UserListRepository from "./UserList.repository";

export const useGetUserListQuery = (userQueryParams: any) => {
  return useQuery(
    ["GetUserList", userQueryParams],
    () => {
      return UserListRepository.getInvestmentAccount(userQueryParams);
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};
