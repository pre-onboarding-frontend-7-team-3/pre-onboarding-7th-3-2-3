import { useMutation } from "@tanstack/react-query";

import clientAPI from "@src/libs/api/client";

const useEditComment = (id: string, value: any) => {
  return useMutation({
    mutationFn: async () => {
      await clientAPI.patch(
        `${import.meta.env.VITE_SERVER_URL}/users/${id}`,
        value
      );
    },
    // TODO: recoil로 error처리
    // onError: res => {
    //   setServerAuthError(handleHTTPResponseError(res));
    // },
  });
};

export default useEditComment;
