import clientAPI from '@src/libs/api/client';

type GetInvestmentAccount = {
  broker_id: string;
  is_active: boolean;
  status: string;
  keyword: string;
  pageLimit: number;
};
class InvestmentAccountRepository {
  private baseQueryString: string = '/accounts?_expand=user&q=';

  getBrokerParamsById(id: string) {
    return id && `&broker_id=${id}`;
  }

  getIsActiveParams(is_active: boolean) {
    return is_active && `&is_active=${is_active}`;
  }

  getStatusString(status: string) {
    return status && `&status=${status}`;
  }

  getPageString(pageLimit: number) {
    return `&_page=${pageLimit}&_limit=20`;
  }

  getInvestmentAccount({
    broker_id,
    is_active,
    status,
    keyword,
    pageLimit,
  }: GetInvestmentAccount) {
    const brokerString = this.getBrokerParamsById(broker_id);

    const isActiveString = this.getIsActiveParams(is_active);

    const statusString = this.getStatusString(status);

    const pageString = this.getPageString(pageLimit);

    return clientAPI.get(
      this.baseQueryString +
        keyword +
        brokerString +
        isActiveString +
        statusString +
        pageString
    );
  }
}

export default new InvestmentAccountRepository();
