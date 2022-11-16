import clientAPI from "@src/libs/api/client";

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  keyword?: string;
  pageLimit: number;
};
class UserListRepository {
  private baseQueryString: string = "users";

  getInvestmentAccount({ pageLimit }: GetInvestmentAccount) {
    return clientAPI.get(this.baseQueryString, {
      params: {
        _page: pageLimit,
        _limit: 20,
      },
    });
  }
}

export default new UserListRepository();
