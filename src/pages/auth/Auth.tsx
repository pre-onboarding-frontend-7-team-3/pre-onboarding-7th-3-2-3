import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./AuthStyle";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    userId: "",
    userPassword: "",
  });

  const onChangeinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const passed = info.userId.includes("@") && info.userPassword.length >= 8;

  const toAuth = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const config = {
      email: info.userId,
      password: info.userPassword,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:4000/users/signin",
        config
      );

      if (data.accessToken) {
        localStorage.setItem("token", data.accessToken);
        alert("로그인 성공");
        navigate("/detail");
      }
    } catch (err) {
      alert("로그인에 실패했습니다");
    }
  };

  return (
    <S.BackgroundColor>
      <S.AuthLayout>
        <S.Logo>PREFACE</S.Logo>
        <S.LoginContainer>
          <S.LoginTitle> 로그인 </S.LoginTitle>
          <S.FormContainer>
            <S.IdInput
              name="userId"
              value={info.userId}
              onChange={onChangeinfo}
              placeholder=" 아이디를 입력하세요"
            />
            <S.PassWordInput
              name="userPassword"
              type="password"
              value={info.userPassword}
              onChange={onChangeinfo}
              placeholder=" 비밀번호를 입력하세요"
            />
            <S.SubmitButton disabled={!passed} onClick={toAuth}>
              로그인
            </S.SubmitButton>
          </S.FormContainer>
        </S.LoginContainer>
      </S.AuthLayout>
    </S.BackgroundColor>
  );
};

export default Auth;
