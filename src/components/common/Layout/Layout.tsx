import React from 'react';
import * as S from './Layout.style'
import Sider from '../Sider/Sider';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Template>
      <Sider />
      <S.PageContainer>
        {children}
      </S.PageContainer>
    </S.Template>
  );
};

export default Layout;
