import * as S from './LoginInput.style';
import {
  regex,
  USER_VALIDATION_ERRORS,
} from '../../../utils/validator';

const LoginInput = ({ register, errors, serverAuthError }: any) => {
  const isClientAuthError = Object.keys(errors).length !== 0;
  return (
    <>
      <S.Container>
        <S.Input
          type="text"
          placeholder="이메일"
          {...register('email', {
            required: USER_VALIDATION_ERRORS.REQUIRED_EMAIL,
            pattern: {
              value: regex.isEmail,
              message: USER_VALIDATION_ERRORS.INVALID_EMAIL,
            },
          })}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          {...register('password', {
            required: USER_VALIDATION_ERRORS.REQUIRED_PASSWORD,
          })}
        />
        {isClientAuthError && (
          <S.ErrorMessage>
            {errors.email?.message || errors.password?.message}
          </S.ErrorMessage>
        )}
      </S.Container>
    </>
  );
};

export default LoginInput;
