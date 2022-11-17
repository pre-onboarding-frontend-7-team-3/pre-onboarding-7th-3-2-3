import { UseFormRegister, FieldValues } from 'react-hook-form';
import * as S from './UserInput.style';

type Props = {
  type: string;
  text: string;
  name: string;
  errors: object;
  validation: object;
  autoFocus?: boolean;
  autocomplete: string;
  register: UseFormRegister<FieldValues>;
};

const UserInput = ({ inputProps, errors, register }: Props) => {
  const { type, name, placeholder, validation, autoFocus, autocomplete } =
    inputProps;
  return (
    <>
      <S.UserInput
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autocomplete={autocomplete}
        {...register(name, validation)}
      />
      {errors[name] && <S.ErrorText>{errors[name].message}</S.ErrorText>}
    </>
  );
};

export default UserInput;
