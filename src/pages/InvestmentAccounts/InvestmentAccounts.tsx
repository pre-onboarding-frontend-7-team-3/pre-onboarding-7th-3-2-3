import Layout from "../../components/common/Layout/Layout";
import Header from "../../components/common/Header/Header";
import PageContainer from "../../components/common/PageContainer/PageContainer";
import InvestmentAccountList from "@src/components/InvestmentAccountList";

const InvestmentAccounts = () => {
  return (
    <Layout>
      <Header title="투자계좌" />
      <PageContainer>
        <InvestmentAccountList />
      </PageContainer>
    </Layout>
  );
};

export default InvestmentAccounts;
