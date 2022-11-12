import { atom } from 'recoil';

export const serverErrorState = atom({
  key: 'serverError',
  default: '',
});
