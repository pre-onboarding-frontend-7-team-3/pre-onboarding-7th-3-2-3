import { UseFormRegister, FieldValues } from 'react-hook-form';
import * as S from './UserInput.style';

type Props = {
  type: string;
  text: string;
  name: string;
  validation: object;
  autoFocus?: boolean;
  autocomplete: string;
  register: UseFormRegister<FieldValues>;
};

const UserInput = ({
  type,
  text,
  name,
  validation,
  autoFocus,
  autocomplete,
  register,
}: Props) => {
  return (
    <S.UserInput
      type={type}
      placeholder={text}
      autoFocus={autoFocus}
      autocomplete={autocomplete}
      {...register(name, validation)}
    />
  );
};

export default UserInput;
