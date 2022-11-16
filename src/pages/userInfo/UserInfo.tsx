import React from 'react';
import { useParams } from 'react-router-dom';
import UserInfoPage from '@src/components/UserInfoPage';
import Layout from '@src/components/common/Layout/Layout';
import Header from '@src/components/common/Header/Header';
import { PageContainer } from '@src/components/common/Layout/Layout.style';

const UserInfo = () => {
  const { userId } = useParams();
  return (
    <Layout>
      <Header title="사용자" />
      <PageContainer>
        {userId}
        <UserInfoPage />
      </PageContainer>
    </Layout>
  );
};

export default UserInfo;
