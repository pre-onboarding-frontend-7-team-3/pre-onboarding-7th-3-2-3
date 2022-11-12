import styled from 'styled-components';
import { isValidEmail } from '../../utils/validator';

const LoginInput = ({ register, errors }: any) => {
  const isClientAuthError = Object.keys(errors).length !== 0;

  return (
    <>
      <Container>
        <Input
          type="text"
          placeholder="이메일"
          {...register('email', {
            required: '* 이메일을 입력해 주세요.',
            pattern: {
              value: isValidEmail,
              message: '* 이메일 형식이 맞지 않습니다.',
            },
          })}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          {...register('password', {
            required: '* 비밀번호를 입력해 주세요.',
          })}
        />
        {isClientAuthError && (
          <ErrorMessage>
            {/* {serverAuthError||errors.email?.message || errors.password?.message} */}
            {errors.email?.message || errors.password?.message}
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
  gap: 30px;
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
  color: red;
`;

export default LoginInput;
