import Layout from "../../components/common/Layout/Layout";
import Header from "../../components/common/Header/Header";
import PageContainer from "../../components/common/PageContainer/PageContainer";
import UserList from "@src/components/Users/UserList";

const Users = () => {
  return (
    <Layout>
      <Header title="사용자" />
      <PageContainer>
        <UserList />
      </PageContainer>
    </Layout>
  );
};

export default Users;
