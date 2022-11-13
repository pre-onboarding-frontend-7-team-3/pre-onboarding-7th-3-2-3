import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';

const InvestmentAccounts = () => {
  return (
    <Layout>
      <Header title="투자계좌" />
      <PageContainer>
        <div>accounts</div>
        <div>페이지네이션</div>
      </PageContainer>
    </Layout>
  );
};

export default InvestmentAccounts;
