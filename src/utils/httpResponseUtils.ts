export const handleHTTPResponseError = res => {
  if (res.response?.data === 'Cannot find user')
    return USER_VALIDATION_ERRORS.USER_NOT_FOUND;
  if (res.response?.data === 'Incorrect password')
    return USER_VALIDATION_ERRORS.INCORRECT_PASSWORD;
  else return USER_VALIDATION_ERRORS.UNEXPECTED_ERROR;
};

const USER_VALIDATION_ERRORS = {
  USER_NOT_FOUND: '* 등록되지 않은 사용자입니다.',
  INCORRECT_PASSWORD : '* 비밀번호를 확인해 주세요.',
  UNEXPECTED_ERROR: '* 잠시 후 다시 시도해 주세요.'
}