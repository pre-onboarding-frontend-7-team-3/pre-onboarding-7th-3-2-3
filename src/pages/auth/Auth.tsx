import React from "react";
import * as S from "./AuthStyle";

const Auth = () => {
  return (
    // <S.Layout>
    <S.BackgroundColor>
      <S.AuthLayout>
        <S.Logo>PREFACE</S.Logo>
        <S.LoginContainer>
          <S.LoginTitle> 로그인 </S.LoginTitle>
          <S.FormContainer>
            <S.IdInput placeholder=" 아이디를 입력하세요" />
            <S.PassWordInput placeholder=" 비밀번호를 입력하세요" />
            <S.SubmitButton> 로그인 </S.SubmitButton>
          </S.FormContainer>
        </S.LoginContainer>
      </S.AuthLayout>
    </S.BackgroundColor>
    // </S.Layout>
  );
};

export default Auth;
