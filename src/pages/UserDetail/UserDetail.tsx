import Layout from '../../components/common/Layout/Layout';
import SEO from '../../components/common/SEO/SEO';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import { useParams } from 'react-router-dom';
import UserDetail from '@src/components/UserDetail/UserDetail';

const UserDetailPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const title = '사용자';
  return (
    <Layout>
      <SEO title={title} />
      <Header title={title} />
      <PageContainer>{!!userId && <UserDetail id={userId} />}</PageContainer>
    </Layout>
  );
};

export default UserDetailPage;
