import { AxiosError } from "axios";
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
  errorCallback: () => void,
  handleCloseModal: (toggleEvent: boolean) => void
) => {
  const { mutate } = useMutation(
    (formData: FormDataType) => NewUserModalRepository.createNewUser(formData),
    {
      onSuccess: (res) => {
        handleCloseModal(false);
      },
      onError: (err: AxiosError) => {
        if (err.response?.data === "Email already exists") {
          return errorCallback();
        }
        alert("잠시 후 시도해 주세요");
      },
    }
  );
  return mutate;
};
