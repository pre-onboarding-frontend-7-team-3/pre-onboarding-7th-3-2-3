import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { authService } from "@src/api";
import { useNavigate } from "react-router-dom";

import logo from '../../assets/dec.png'

export interface AuthInfoType {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [warnMessage, setWarnMessage] = useState("")
  const [authInfo, setAuthInfo] = useState<AuthInfoType>({
    email: "",
    password: "",
  });
 
  const handleInputChange =
    (key: "email" | "password") => (e: React.ChangeEvent<HTMLInputElement>) => {
      setAuthInfo({
        ...authInfo,
        [key]: e.target.value,
      });
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await authService.signin(authInfo.email, authInfo.password)
    if (response.status === 400) {
      setWarnMessage(response.data)
    }
    else {
      navigate('/')
    }
  };

  return (
    <Wrapper>
      <Logo>PREFACE</Logo>
      <Form onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <InputContainer>
          <input
            type="text"
            name="email"
            placeholder="아이디를 입력하세요"
            value={authInfo["email"]}
            onChange={handleInputChange("email")}
          />
        </InputContainer>
        <InputContainer>
          <input
            type="password"
            name="email"
            placeholder="비밀번호를 입력하세요"
            value={authInfo["password"]}
            onChange={handleInputChange("password")}
          />
        </InputContainer>
        <WarnMessage>
          {warnMessage}
        </WarnMessage>
        <button type="submit">
          로그인
        </button>
      </Form>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.div`
  text-align: center;
  color: ${props=> {return props.theme.color.deepblue}};
  font-size: xx-large;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Form = styled.form`
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 2px #9d9d9d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  background-color:white;

  h2 {
    width: 100%;
    margin: 0;
    padding: 10px 10%;
    font-size: larger;
    background-color: #eee;
    text-align: left;
  }

  button {
    padding: 10px 15px;
    margin: 8px;
    width: 80%;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    box-shadow: 0.5px 1px 0 rgb(0,0,0,0.5);
    font-weight: bold;
    background-color: white;
  }

  button:hover{
    background-color: #eee;
    cursor:pointer;
  }

  button:active {
    background-color: #eee;
    box-shadow: 0px 0.5px 0 rgb(0,0,0,0.5);
    position: relative;
    top:1px
  }
`;

const InputContainer = styled.div`
  width: 80%;
  margin: 12px 0;
  input {
    width: 100%;
    background-color: #eee;
    border: none;
    padding: 10px 15px;
  }
`;

const WarnMessage = styled.div`
  
`