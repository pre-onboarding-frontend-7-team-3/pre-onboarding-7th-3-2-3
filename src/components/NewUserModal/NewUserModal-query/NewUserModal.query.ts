import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import NewUserModalRepository from './NewUserModal.repository';

export const useCreateNewUserQuery = (
  successCallback: () => void,
  errorCallback: () => void
) => {
  const { mutate } = useMutation(
    formData => NewUserModalRepository.createNewUser(formData),
    {
      onSuccess: res => {
        successCallback();
      },
      onError: (err: AxiosError) => {
        if (err.response?.data === 'Email already exists') {
          return errorCallback();
        }
        alert('잠시 후 시도해 주세요');
      },
    }
  );
  return mutate;
};
