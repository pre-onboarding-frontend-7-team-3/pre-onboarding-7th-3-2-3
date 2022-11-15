import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import { useMutation, useQuery } from '@tanstack/react-query';
import investmentService from '@src/libs/api';
import { AccountType } from '@src/types/account';
import { useNavigate } from 'react-router-dom';
import ROUTES from '@src/constants/routes';
import InvestmentAccountList from '@src/components/InvestmentAccountList';
import { useEffect, useState } from 'react';

const InvestmentAccounts = () => {
  console.log('investmanet accounts');

  const { data, isLoading } = useQuery<AccountType[]>(
    ['investment-account-list'],
    investmentService.getAccounts,
    {
      onError: (res: any) => {
        console.log('query error res', res);
      },
    }
  );

  return (
    <Layout>
      <Header title="투자계좌" />
      <PageContainer>
        <InvestmentAccountList accounts={data} />
      </PageContainer>
    </Layout>
  );
};

export default InvestmentAccounts;
