import { useQuery } from '@tanstack/react-query';
import UserListFilteredByKeywordRepository from './UserListFilteredByKeyword.repository';

export const useGetFilteredUserList = (userQueryParams: any) => {
  return useQuery(
    ['GetUserList', userQueryParams],
    () => {
      return UserListFilteredByKeywordRepository.getUserListFilteredByKeyword(
        userQueryParams
      );
    },
    {
      staleTime: 2000,
      keepPreviousData: true,
    }
  );
};
