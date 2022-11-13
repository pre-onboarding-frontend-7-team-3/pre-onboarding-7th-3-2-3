import AuthAPI from '../../../libs/api/auth'
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const handleLogin = (
  options?: UseMutationOptions<any>
) => {
  return useMutation(
    AuthAPI.login,
    options
  );
};

export default handleLogin;
