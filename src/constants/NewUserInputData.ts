export const NEW_USER_INPUT_DATA = [
  {
    id: 1,
    type: 'text',
    text: '이름',
    name: 'name',
    validation: { required: '이름을 입력해 주세요' },
    autoFocus: true,
    autoComplete: 'false',
  },
  {
    id: 2,
    type: 'password',
    text: '비밀번호',
    name: 'password',
    validation: {
      required: '비밀번호를 입력해 주세요.',
      minLength: {
        value: 8,
        message: '* 8글자 이상 입력해 주세요.',
      },
    },
    autoComplete: 'false',
  },
  {
    id: 3,
    type: 'text',
    text: '이메일',
    name: 'email',
    validation: {
      required: '이메일을 입력해 주세요',
      pattern: {
        value:
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        message: '이메일 형식이 맞지 않습니다.',
      },
    },
    autoComplete: 'false',
  },
  {
    id: 4,
    type: 'text',
    text: '나이',
    name: 'age',
    validation: { required: '나이를 입력해 주세요' },
    autoComplete: 'false',
  },

  {
    id: 5,
    type: 'text',
    text: '생년월일',
    name: 'birth_date',
    validation: { required: '생년월일 입력해 주세요' },
    autoComplete: 'false',
  },
  {
    id: 6,
    type: 'text',
    text: '전화번호',
    name: 'phone_number',
    validation: { required: '전화번호를 입력해 주세요' },
    autoComplete: 'false',
  },
  {
    id: 7,
    type: 'text',
    text: '주소',
    name: 'address',
    validation: { required: '주소를 입력해 주세요' },
    autoComplete: 'false',
  },
  {
    id: 8,
    type: 'text',
    text: '상세주소',
    name: 'detail_address',
    validation: { required: '상세주소를 입력해 주세요' },
    autoComplete: 'false',
  },
];
