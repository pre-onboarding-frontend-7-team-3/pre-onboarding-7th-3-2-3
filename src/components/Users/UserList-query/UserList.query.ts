import clientAPI from "@src/libs/api/client";
import { useQuery } from "@tanstack/react-query";
import UserListRepository from "./UserList.repository";

export const useGetUserListQuery = (userQueryParams: any) => {
  return useQuery(
    ["GetUserList", userQueryParams],
    () => {
      return clientAPI.get(
        "users?_embed=userSetting&name_like=&is_active=false&is_staff=true"
        );
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};
