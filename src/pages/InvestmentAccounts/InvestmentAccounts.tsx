import Layout from '../../components/common/Layout/Layout';
import Header from '../../components/common/Header/Header';
import PageContainer from '../../components/common/PageContainer/PageContainer';
import InvestmentAccountList from '@src/components/InvestmentAccountList/InvestmentAccountList';
import { useState } from 'react';
import Pagination from "react-js-pagination"
import "./"


const InvestmentAccounts = () => {

  const [page, setPage] = useState<Number>(1);
  const handlePageChange = (page : number) => {
    setPage(page);
  }


  return (
    <Layout>
      <Header title="투자계좌" />
      <PageContainer>
        <div>accounts</div>
        <InvestmentAccountList/>
        {/* <Pagination
        activeClassName='pagination'
      activePage={page} //현재 페이지
      itemsCountPerPage={10} //페이지당 몇개 보여줄건지
      totalItemsCount={101} //총 아이템 갯수
      pageRangeDisplayed={5} //paginator 내에서 보여줄 페이지 범위
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange} //페이지 바뀔때 핸들링
      
    /> */}
      </PageContainer>
    </Layout>
  );
};

export default InvestmentAccounts;


