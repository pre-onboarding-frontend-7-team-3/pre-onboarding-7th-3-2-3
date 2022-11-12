import styled from 'styled-components';

const LoginInput = ({ register, errors }: any) => {
  const isFormatEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const isClientError = Object.keys(errors).length !== 0;

  return (
    <>
      <AuthInputWrapper>
        <Input
          type="text"
          placeholder="이메일"
          {...register('email', {
            required: '* 이메일을 입력해 주세요.',
            pattern: {
              value: isFormatEmail,
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
        {isClientError && (
          <ErrorText>
            {/* {serverAuthError||errors.email?.message || errors.password?.message} */}
            {errors.email?.message || errors.password?.message}
          </ErrorText>
        )}
      </AuthInputWrapper>
    </>
  );
};

const AuthInputWrapper = styled.div`
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

const ErrorText = styled.p`
  color: red;
`;

export default LoginInput;
