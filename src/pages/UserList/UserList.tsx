import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import SEO from '../../components/common/SEO/SEO';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import UserList from '../../components/UserList/UserList';

const Users = () => {
  const title = '사용자 목록';
  return (
    <Layout>
      <SEO title={title} />
      <Header title={title} />
      <PageContainer>
        <UserList />
      </PageContainer>
    </Layout>
  );
};

export default Users;
