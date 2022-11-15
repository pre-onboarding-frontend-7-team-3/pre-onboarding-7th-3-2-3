import clientAPI from '@src/libs/api/client';

class InvestmentAccountRepository {
  getInvestmentAccount(accountQueryParams, currentPage) {
    const broker =
      accountQueryParams.broker_id &&
      `&broker_id=${accountQueryParams.broker_id}`;
    const isActive =
      accountQueryParams.is_active &&
      `&is_active=${accountQueryParams.is_active}`;
    const status =
      accountQueryParams.status && `&status=${accountQueryParams.status}`;
    const url = `/accounts?_expand=user&q=${accountQueryParams.keyword}${broker}${isActive}${status}&_page=${currentPage}&_limit=20`;
   return clientAPI.get(url);
  }
}

export default new InvestmentAccountRepository();
