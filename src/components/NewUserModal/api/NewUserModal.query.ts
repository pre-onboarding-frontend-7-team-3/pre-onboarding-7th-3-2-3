import { useMutation } from '@tanstack/react-query';
import NewUserModalRepository from './NewUserModal.repository';

export const useCreateNewUserQuery = (cb: () => void) => {
  const { mutate } = useMutation(
    formData => NewUserModalRepository.createNewUser(formData),
    {
      onSuccess: res => {
        cb();
      },
      onError: err => {
        console.log(`ERR: `, err);
        // TODO 에러 예외처리
      },
    }
  );
  return mutate;
};
