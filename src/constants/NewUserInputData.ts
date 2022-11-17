import { regex } from "../utils/validator";

export const NEW_USER_INPUT_DATA = [
  {
    id: 1,
    type: "text",
    text: "이름",
    name: "name",
    placeholder: "이름",
    validation: { required: "이름을 입력해 주세요" },
    autoFocus: true,
    autoComplete: "false",
  },
  {
    id: 2,
    type: "password",
    text: "비밀번호",
    name: "password",
    placeholder: "비밀번호",
    validation: {
      required: "비밀번호를 입력해 주세요",
      minLength: {
        value: 8,
        message: "8글자 이상 입력해 주세요",
      },
    },
    autoComplete: "false",
  },
  {
    id: 3,
    type: "text",
    text: "이메일",
    name: "email",
    placeholder: "이메일",
    validation: {
      required: "이메일을 입력해 주세요",
      pattern: {
        value: regex.isEmail,
        message: "이메일 형식이 맞지 않습니다",
      },
    },
    autoComplete: "false",
  },
  {
    id: 4,
    type: "text",
    text: "나이",
    name: "age",
    placeholder: "나이",
    validation: {
      required: "나이를 입력해 주세요",
      pattern: {
        value: regex.isNumber,
        message: "숫자를 입력해주세요",
      },
    },
    autoComplete: "false",
  },

  {
    id: 5,
    type: "text",
    text: "생년월일",
    name: "birth_date",
    placeholder: "예) 1990-12-30",
    validation: {
      required: "생년월일 입력해 주세요",
      pattern: {
        value: regex.isValidDate,
        message: "예) 1990-12-30",
      },
    },
    autoComplete: "false",
  },
  {
    id: 6,
    type: "text",
    text: "전화번호",
    name: "phone_number",
    placeholder: "예) 010-0000-0000",
    validation: {
      required: "전화번호를 입력해 주세요",
      pattern: {
        value: regex.isValidPhoneNumber,
        message: "예) 010-0000-0000",
      },
    },
    autoComplete: "false",
  },
  {
    id: 7,
    type: "text",
    text: "주소",
    name: "address",
    placeholder: "주소",
    validation: { required: "주소를 입력해 주세요" },
    autoComplete: "false",
  },
];
