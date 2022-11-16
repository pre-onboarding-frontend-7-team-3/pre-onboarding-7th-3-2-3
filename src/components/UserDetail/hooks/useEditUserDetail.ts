import { editUserName } from "@src/libs/api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditComment = () => {
  //   const queryClient = useQueryClient();
  //   return useMutation({
  //     mutationFn: (id: string, value: string) => editUserName(id, value),
  //     mutationKey: "userEditName",
  //     onSuccess: () => console.log("성공"),
  //   });
};

export default useEditComment;
/*
(id: string, value: string) => editUserName(id, value), {
    onSuccess: () => {
      queryClient.invalidateQueries("userDetail", "userAccount", "userSetting");
    },
  }
*/
