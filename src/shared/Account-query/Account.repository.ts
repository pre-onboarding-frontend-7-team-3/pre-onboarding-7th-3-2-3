import clientAPI from '@src/libs/api/client';
import { InvestmentAccountProps } from './Account.model';

class InvestmentAccountRepository {
  private getPageString(pageNum: number) {
    return `&_page=${pageNum}&_limit=20`;
  }

  private baseQueryString: string = '/accounts?_expand=user';

  private removeEmptyStringFromParams(params: InvestmentAccountProps) {
    for (const key of Object.keys(params)) {
      if (!params[key as keyof typeof params]) {
        delete params[key as keyof typeof params];
      }
    }
    return params;
  }
  getInvestmentAccount(params: InvestmentAccountProps) {
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
