import { UseFormRegister, FieldValues, FieldErrorsImpl } from "react-hook-form";
import * as S from "./UserInput.style";

interface Props {
  inputProps: InputPropsType;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  register: UseFormRegister<FieldValues>;
}

type InputPropsType = {
  type: string;
  text: string;
  name: string;
  validation: object;
  autoFocus?: boolean;
  autocomplete: string;
  placeholder: string;
};

const UserInput = ({ inputProps, errors, register }: Props) => {
  console.log("inputProps", inputProps);
  console.log("errors", errors);
  console.log("register", register);

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
