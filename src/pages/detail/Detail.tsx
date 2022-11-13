import { Slide } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <SlideBar>
      <Logo>PREFACE</Logo>
      <DashBoardTitle> 대시보드</DashBoardTitle>
      <AcountBoardTitle>투자 계좌</AcountBoardTitle>
      <LogoOutTitle> 로그 아웃</LogoOutTitle>
    </SlideBar>
    // <Header>

    // </Header>
  );
};

export default Detail;

export const SlideBar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #051527;
`;

export const Logo = styled.div`
  width: 100%;
  height: 50px;
  color: white;
  font-size: 40px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashBoardTitle = styled.div`
  width: 100%
  height: 90px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0 0 20px;
  &:hover {
    background-color : blue;
  }
`;

export const AcountBoardTitle = styled(DashBoardTitle)``;

export const LogoOutTitle = styled(DashBoardTitle)``;
