import AuthAPI from '../../../libs/api/auth';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
interface IAuthInputs {
  email: string;
  password: string;
}

const handleLogin = (options?: UseMutationOptions<any>) => {
  return useMutation<IAuthInputs>(AuthAPI.login, options);
};

export default handleLogin;
