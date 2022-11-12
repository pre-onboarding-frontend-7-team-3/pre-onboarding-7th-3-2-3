import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './LoginForm.style'
import LoginInput from './LoginInput/LoginInput';
import handleLogin from './api/handleLogin';
import { handleHTTPResponseError } from '../../utils/auth/httpResponseUtils';
import storage from '../../utils/storage/webStorageUtils';

const LoginForm = () => {
  const [serverAuthError, setServerAuthError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: login } = handleLogin({
    onSuccess: res => {
      storage.set('access_token', res.accessToken);
      // navigate('/dashboard')
    },
    onError: res => {
      setServerAuthError(handleHTTPResponseError(res));
    },
  });

  return (
    <S.Form onSubmit={handleSubmit(data => login(data))}>
      <S.Title>DnC</S.Title>
      <LoginInput
        register={register}
        errors={errors}
        serverAuthError={serverAuthError}
      />
      <S.SubmitButton>로그인</S.SubmitButton>
      <S.Copyright>ⓒ December and Company</S.Copyright>
    </S.Form>
  );
};

export default LoginForm;
