import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import clientAPI from '@src/libs/api/client';
import { useQuery } from '@tanstack/react-query';
import { options } from '@src/libs/api/options';
import InvestmentAccountList from '@src/components/InvestmentAccountList/InvestmentAccountList';

const InvestmentAccounts = () => {

  const fetchAcList = async () => {
    return clientAPI.get("accounts")
  }

  const {data: AccountsList } = useQuery(["InvestAccount"], fetchAcList,)

  console.log(AccountsList?.data)


  return (
    <Layout>
      <Header title="투자계좌" />
      <PageContainer>
        <div>accounts</div>
        <InvestmentAccountList />
      </PageContainer>
    </Layout>
  );
};

export default InvestmentAccounts;
