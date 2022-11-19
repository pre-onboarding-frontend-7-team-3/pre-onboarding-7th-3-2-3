import { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import * as S from './LoginForm.style';
import LoginInput from './LoginInput/LoginInput';
import LoginErrorModal from './LoginErrorModal/LoginErrorModal';
import { useLoginQuery } from '@src/shared/Login-query/Login.query';
import { authInputProps } from '@src/shared/Login-query/Login.model';

const LoginForm = () => {
  const [serverAuthError, setServerAuthError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<authInputProps>();

  const onSubmitMutate = useLoginQuery(setServerAuthError);
  const onSubmitLoginForm = handleSubmit(authInputs => onSubmitMutate(authInputs));

  return (
    <S.Container>
      <S.Form onSubmit={onSubmitLoginForm}>
        <S.Logo
          src="https://platum.kr/wp-content/uploads/2021/03/de.jpg"
          alt="디셈버앤컴퍼니"
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
