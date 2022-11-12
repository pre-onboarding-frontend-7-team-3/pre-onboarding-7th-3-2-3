import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import LoginInput from './LoginInput';
import handleLogin from '../../pages/login/api/handleLogin';
import { handleHTTPResponseError } from '../../utils/httpResponseUtils'
import storage from '../../utils/webStorageUtils';

const LoginForm = () => {
  const [serverAuthError, setServerAuthError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { mutate: login } = handleLogin({
    onSuccess: res => {
      storage.set('access_token', res.accessToken);
      console.log('success');
    },
    onError: res => {
      // console.log('error');
      console.log(handleHTTPResponseError(res));
    },
  });

  return (
    <Form
      onSubmit={handleSubmit(data => {
        login(data);
      })}
    >
      <Title>DnC</Title>
      <LoginInput register={register} errors={errors} />
      <SubmitButton>로그인</SubmitButton>ⓒ December and Company
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-width: 400px;
  min-height: 550px;
  gap: 25px;
  margin: 0 auto;
  padding: 50px 100px;
  border: 1px solid lightgrey;
  border-radius: 7px;
`;

const Title = styled.h1`
  font-size: 50px;
  letter-spacing: 8px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 20px;
  font-size: 24px;
  font-weight: 900;
  color: white;
  border: none;
  border-radius: 7px;
  background-color: rgb(83, 153, 219);
  cursor: pointer;

  &:hover {
    background-color: #438ce2;
  }
`;

export default LoginForm;
