import styled from 'styled-components';
import { isValidEmail, USER_VALIDATION_ERRORS } from '../../utils/validator';

const LoginInput = ({ register, errors, serverAuthError }: any) => {
  const isClientAuthError = Object.keys(errors).length !== 0;
  return (
    <>
      <Container>
        <Input
          type="text"
          placeholder="이메일"
          {...register('email', {
            required: USER_VALIDATION_ERRORS.REQUIRED_EMAIL,
            pattern: {
              value: isValidEmail,
              message: USER_VALIDATION_ERRORS.INVALID_EMAIL,
            },
          })}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          {...register('password', {
            required: USER_VALIDATION_ERRORS.REQUIRED_PASSWORD,
          })}
        />
        {(serverAuthError || isClientAuthError) && (
          <ErrorMessage>
            {errors.email?.message ||
              errors.password?.message ||
              serverAuthError}
          </ErrorMessage>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 40px;
`;

const Input = styled.input`
  padding: 20px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: rgb(241, 241, 241);

  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.p`
margin-top: -20px;
  color: red;
`;

export default LoginInput;
