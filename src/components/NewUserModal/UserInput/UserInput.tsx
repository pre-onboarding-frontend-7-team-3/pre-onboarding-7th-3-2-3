import { UseFormRegister, FieldValues, FieldErrorsImpl } from 'react-hook-form';
import * as S from './UserInput.style';

interface UserImputProps {
  inputProps: InputPropsType;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: string[];
    }>
  >;
  register: UseFormRegister<FieldValues>;
}

type InputPropsType = {
  type: string;
  name: string;
  validation: object;
  autoFocus?: boolean;
  autoComplete: string;
  placeholder: string;
};

const UserInput = ({ inputProps, errors, register }: UserImputProps) => {
  const { type, name, placeholder, validation, autoFocus, autoComplete } =
    inputProps;
  return (
    <>
      <S.UserInput
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        {...register(name, validation)}
      />
      {errors[name] && <S.ErrorText>{errors[name]?.message}</S.ErrorText>}
    </>
  );
};

export default UserInput;
