import clientAPI from "@src/libs/api/client";

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  keyword?: string;
  pageNum: number;
};

class InvestmentAccountRepository {
  private getPageString(pageNum: number) {
    return `&_page=${pageNum}&_limit=20`;
  }

  private baseQueryString: string = "/accounts?_expand=user";

  private removeEmptyStringFromParams(params: GetInvestmentAccount) {
    for (const key of Object.keys(params)) {
      if (!params[key as keyof typeof params]) {
        delete params[key as keyof typeof params];
      }
    }
    return params;
  }
  getInvestmentAccount(params: GetInvestmentAccount) {
    const paramsWithoutEmptyString = this.removeEmptyStringFromParams({
      ...params,
      pageNum: 0,
    });
    const pageString = this.getPageString(params.pageNum);
    return clientAPI.get(this.baseQueryString + pageString, {
      params: paramsWithoutEmptyString,
    });
  }
}

export default new InvestmentAccountRepository();
