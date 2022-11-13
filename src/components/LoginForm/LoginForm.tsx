import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as S from './LoginForm.style';
import LoginInput from './LoginInput/LoginInput';
import LoginErrorModal from './LoginErrorModal/LoginErrorModal';
import handleQueryLogin from './api/handleQueryLogin';
import { handleHTTPResponseError } from '../../utils/auth/httpResponseUtils';
import storage from '../../utils/storage/webStorageUtils';
import ROUTES from '../../constants/routes'

const LoginForm = () => {
  const [serverAuthError, setServerAuthError] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: login } = handleQueryLogin({
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
        <S.Logo
          src="https://platum.kr/wp-content/uploads/2021/03/de.jpg"
          alt='디셈버앤컴퍼니'
        />
        <LoginInput
          register={register}
          errors={errors}
          serverAuthError={serverAuthError}
        />
        <S.SubmitButton>로그인</S.SubmitButton>
        <S.Copyright>ⓒ December and Company</S.Copyright>
      </S.Form>
      {serverAuthError && (
        <LoginErrorModal
          serverAuthError={serverAuthError}
          setServerAuthError={setServerAuthError}
        />
      )}
    </S.Container>
  );
};

export default LoginForm;
