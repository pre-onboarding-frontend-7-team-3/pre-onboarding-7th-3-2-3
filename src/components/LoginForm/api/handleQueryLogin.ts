import investmentService from '../../../libs/api';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

const handleLogin = (options?: UseMutationOptions<any>) => {
  return useMutation(investmentService.login, options);
};

export default handleLogin;
