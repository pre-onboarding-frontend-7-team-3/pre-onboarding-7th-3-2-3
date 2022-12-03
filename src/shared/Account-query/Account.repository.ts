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

  getInvestmentAccount({
    broker_id,
    is_active,
    status,
    q,
    pageNum,
  }: InvestmentAccountProps) {
    // const paramsWithoutEmptyString = this.removeEmptyStringFromParams({
    //   ...params,
    //   pageNum: 0,
    // });

    const pageString = this.getPageString(pageNum);
    return clientAPI.get(this.baseQueryString + pageString, {
      params: {
        ...(broker_id && { broker_id }),
        ...(is_active && { is_active }),
        ...(status && { status }),
        ...(q && { q }),
      },
    });
  }
}

export default new InvestmentAccountRepository();
