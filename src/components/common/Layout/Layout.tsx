import React from 'react';
import * as S from './Layout.style'
import Sider from '../Sider/Sider';
import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Template>
      <Sider />
      <S.Container>
        <Header />
        {children}
      </S.Container>
    </S.Template>
  );
};

export default Layout;
