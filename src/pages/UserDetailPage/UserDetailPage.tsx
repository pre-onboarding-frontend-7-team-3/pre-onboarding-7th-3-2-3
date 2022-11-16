import Layout from "../../components/common/Layout/Layout";
import Header from "../../components/common/Header/Header";
import PageContainer from "../../components/common/PageContainer/PageContainer";
import { useParams } from "react-router-dom";
import UserDetail from "@src/components/UserDetail/UserDetail";

const UserDetailPage = () => {
  const { userId } = useParams<{ userId?: string }>();

  return (
    <Layout>
      <Header title="사용자" />
      <PageContainer>
        <UserDetail id={userId} />
      </PageContainer>
    </Layout>
  );
};

export default UserDetailPage;
