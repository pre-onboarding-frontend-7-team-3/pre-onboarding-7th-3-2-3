import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import clientAPI from '@src/libs/api/client';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import UserInfo from '@src/components/Users/UsersInfo';

const Users = () => {

  return (
    <Layout>
      <Header title="사용자" />
      <PageContainer>
        <div>users</div>
        <UserInfo />
      </PageContainer>
    </Layout>
  );
};

export default Users;
