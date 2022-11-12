import { USER_VALIDATION_ERRORS } from './validator';

export const handleHTTPResponseError = res => {
  if (res.response?.data === 'Cannot find user')
    return USER_VALIDATION_ERRORS.USER_NOT_FOUND;
  if (res.response?.data === 'Incorrect password')
    return USER_VALIDATION_ERRORS.INCORRECT_PASSWORD;
  if (res.response?.data === 'Password is too short')
    return USER_VALIDATION_ERRORS.INCORRECT_PASSWORD;
  else return USER_VALIDATION_ERRORS.UNEXPECTED_ERROR;
};
