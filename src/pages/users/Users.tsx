import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import { useParams } from 'react-router-dom';

const Users = () => {
  const { userId } = useParams();
  return (
    <Layout>
      <Header title="사용자" />
      <PageContainer>
        <div>{userId}</div>
      </PageContainer>
    </Layout>
  );
};

export default Users;
