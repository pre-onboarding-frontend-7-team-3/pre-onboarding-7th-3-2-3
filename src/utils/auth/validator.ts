export const isValidEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const USER_VALIDATION_ERRORS = {
  USER_NOT_FOUND: '등록되지 않은 사용자입니다.',
  INCORRECT_PASSWORD : '비밀번호를 확인해 주세요.',
  REQUIRED_EMAIL: '* 이메일을 입력해 주세요.',
  INVALID_EMAIL:'* 이메일 형식이 맞지 않습니다.',
  REQUIRED_PASSWORD: '* 비밀번호를 입력해 주세요.',
  UNEXPECTED_ERROR: '잠시 후 다시 시도해 주세요.'
}