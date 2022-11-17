import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export const usePrefetchUserListQuery = (accountQueryParams: any) => {
  const accountPrefetchQueryParams = {
    ...accountQueryParams,
    pageNum: accountQueryParams.pageNum + 1,
  };
  return useQuery(
    ["GetInvestmentAccount", accountPrefetchQueryParams],
    () => {
      return UserListRepository.getInvestmentAccount(
        accountPrefetchQueryParams
      );
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (checkedUserIds: string[]) => {
      return await Promise.all(
        checkedUserIds.map((userId) => UserListRepository.deleteUser(userId))
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["GetUserList"]);
    },
  });
};
