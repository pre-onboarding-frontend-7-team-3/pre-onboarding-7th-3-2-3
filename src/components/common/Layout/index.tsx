import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default Layout;

const Template = styled.main``;


const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.main`
  display: flex;
  width: 100%;
`;

