import * as S from './UserInput.style';

const UserInput = ({
  type,
  text,
  name,
  validation,
  autoFocus,
  autoComplete,
  register,
}) => {
  return (
    <S.UserInput
      type={type}
      placeholder={text}
      autoFocus={autoFocus}
      autocomplete={autoComplete}
      {...register(name, validation)}
    />
  );
};

export default UserInput;
