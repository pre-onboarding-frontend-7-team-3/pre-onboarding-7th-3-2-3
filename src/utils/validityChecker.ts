import React from 'react'
import { AuthInfoType } from '@src/pages/Login/Login'
const validityChecker = (autoInfo:AuthInfoType) => {
  const regexForValidityAuth = {
    password: {
      warnText: "비밀번호는 8글자 이상이어야 합니다.",
      fn: new RegExp("?=.{8,})"),
    },
    email: {
      warnText: "이메일 형식에 맞지 않습니다.",
      fn: new RegExp("@"),
    },
  };

  return [isValid, warnMessage]
}

export default validityChecker