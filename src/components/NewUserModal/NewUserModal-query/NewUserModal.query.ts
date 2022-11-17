import { useMutation } from "@tanstack/react-query";
import NewUserModalRepository from "./NewUserModal.repository";

export type FormDataType = {
  photo: HTMLImageElement;
  gender_origin: string;
  age: any;
  name: string;
  birth_date: string;
  detail_address: string;
  phone_number: string;
  address: string;
  email: string;
  password: string;
  created_at: Date;
};

export const useCreateNewUserQuery = (
  handleCloseModal: (toggleEvent: boolean) => void
) => {
  const { mutate } = useMutation(
    (formData: FormDataType) => NewUserModalRepository.createNewUser(formData),
    {
      onSuccess: (res) => {
        handleCloseModal(false);
      },
      onError: (err) => {
        console.log(`ERR: `, err);
        // TODO 에러 예외처리
      },
    }
  );
  return mutate;
};
