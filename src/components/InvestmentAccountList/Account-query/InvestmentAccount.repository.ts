import clientAPI from "@src/libs/api/client";

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  keyword?: string;
  pageLimit: number;
};
class InvestmentAccountRepository {
  private baseQueryString: string = "/accounts?_expand=user";

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
}

export default new InvestmentAccountRepository();
