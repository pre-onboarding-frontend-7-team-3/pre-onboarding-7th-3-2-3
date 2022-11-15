import AuthAPI from "../../../libs/api/auth";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const handleLogin = (options?: UseMutationOptions) => {
  return useMutation(AuthAPI.login, options);
};

export default handleLogin;
