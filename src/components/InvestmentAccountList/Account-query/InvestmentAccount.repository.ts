import clientAPI from '@src/libs/api/client';

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  keyword?: string;
  pageLimit: number;
};
class InvestmentAccountRepository {
  private getPageString(pageLimit: number) {
    return `&_page=${pageLimit}&_limit=20`;
  }
  private baseQueryString: string = '/accounts?_expand=user';

  private removeEmptyStringFromParams(params: GetInvestmentAccount) {
    for (const key of Object.keys(params)) {
      if (params[key as keyof typeof params] === '') {
        delete params[key as keyof typeof params];
      }
    }

    return params;
  }

  getInvestmentAccount(params: GetInvestmentAccount) {
    const paramsWithoutEmptyString = this.removeEmptyStringFromParams({
      ...params,
    });

    return clientAPI.get(this.baseQueryString, {
      params: paramsWithoutEmptyString,
    });
  }

  preFetchAccount(nextPage: number, maxPage: number) {
    const pageString = this.getPageString(nextPage);
    return clientAPI.get(this.baseQueryString + pageString);
  }
}

export default new InvestmentAccountRepository();
