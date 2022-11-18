import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'universal-cookie';
import ROUTES from '../../../constants/routes';
import LoginRepository from './Login.repository';
import { handleHTTPResponseError } from '../../../utils/auth/httpResponseUtils';
import { AxiosError } from 'axios';

export const useLoginQuery = (
  setServerAuthError: Dispatch<SetStateAction<string>>
) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const expiresTime = new Date();
  expiresTime.setHours(expiresTime.getHours() + 1);

  const { mutate } = useMutation(
    authInputs => LoginRepository.handleLogin(authInputs),
    {
      onSuccess: res => {
        cookies.set('access_token', res.data.accessToken, {
          path: '/',
          expires: expiresTime,
        });
        navigate(`${ROUTES.ACCOUNTS}`);
      },
      onError: (err: AxiosError) => {
        setServerAuthError(handleHTTPResponseError(err));
      },
    }
  );
  return mutate;
};
