import {
  getUserAllAccount,
  getUserDetail,
  getUserSetting,
} from "@src/libs/api/user";
import { useQueries } from "@tanstack/react-query";

const useUserDetail = (userId: string) => {
  console.log("useQuery!!");
  return useQueries({
    queries: [
      {
        queryKey: ["userDetail", userId],
        queryFn: () => getUserDetail(userId),
      },
      {
        queryKey: ["userAccount", userId],
        queryFn: () => getUserAllAccount(userId),
      },
      {
        queryKey: ["userSetting", userId],
        queryFn: () => getUserSetting(userId),
      },
    ],
  });
};

export default useUserDetail;
