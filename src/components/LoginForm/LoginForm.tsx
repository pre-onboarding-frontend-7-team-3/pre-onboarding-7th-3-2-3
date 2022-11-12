import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './LoginForm.style';
import LoginInput from './LoginInput/LoginInput';
import handleLogin from './api/handleLogin';
import { handleHTTPResponseError } from '../../utils/auth/httpResponseUtils';
import storage from '../../utils/storage/webStorageUtils';
import { ROUTES } from '../../App';

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
      navigate(`${ROUTES.ACCOUNTS}`);
    },
    onError: res => {
      setServerAuthError(handleHTTPResponseError(res));
    },
  });

  return (
    <S.Container>
    <S.Form onSubmit={handleSubmit(data => login(data))}>
      <img src="https://platum.kr/wp-content/uploads/2021/03/de.jpg" style={{width:'300px',height:'180px'}}/>
      <LoginInput
        register={register}
        errors={errors}
        serverAuthError={serverAuthError}
      />
      <S.SubmitButton>로그인</S.SubmitButton>
      <S.Copyright>ⓒ December and Company</S.Copyright>
    </S.Form>
    </S.Container>
  );
};

export default LoginForm;
