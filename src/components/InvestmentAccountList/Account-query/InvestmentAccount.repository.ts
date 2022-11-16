import clientAPI from '@src/libs/api/client';

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  keyword?: string;
  pageLimit: number;
};
class InvestmentAccountRepository {
  // private baseQueryString: string = '/accounts?_expand=user&q=';

  // private getBrokerParamsById(id: string) {
  //   return id && `&broker_id=${id}`;
  // }

  // private getIsActiveParams(is_active: boolean) {
  //   return is_active && `&is_active=${is_active}`;
  // }

  // private getStatusString(status: string) {
  //   return status && `&status=${status}`;
  // }

  private getPageString(pageLimit: number) {
    return `&_page=${pageLimit}&_limit=20`;
  }
  private baseQueryString: string = '/accounts?_expand=user';

  getInvestmentAccount({
    broker_id,
    is_active,
    status,
    keyword,
    pageLimit,
  }: GetInvestmentAccount) {
    return clientAPI.get(this.baseQueryString, {
      params: {
        q: keyword,
        broker_id,
        is_active,
        _page: pageLimit,
        _limit: 20,
        status,
      },
    });
  }

  preFetchAccount(nextPage: number, maxPage: number) {
    const pageString = this.getPageString(nextPage);
    return clientAPI.get(this.baseQueryString + pageString);
  }
}

export default new InvestmentAccountRepository();