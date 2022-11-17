import Layout from '../../components/common/Layout/Layout';
import SEO from '../../components/common/SEO/SEO';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import InvestmentAccountList from '@src/components/InvestmentAccountList';

const InvestmentAccounts = () => {
  const title = '투자 계좌';
  return (
    <Layout>
      <SEO title={title} />
      <Header title={title} />
      <PageContainer>
        <InvestmentAccountList />
      </PageContainer>
    </Layout>
  );
};

export default InvestmentAccounts;
