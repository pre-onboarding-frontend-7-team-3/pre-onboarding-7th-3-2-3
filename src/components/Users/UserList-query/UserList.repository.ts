import clientAPI from '@src/libs/api/client';

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  keyword?: string;
  pageLimit: number;
};
class UserListRepository {
  private baseQueryString: string = 'users?_embed=userSetting';

  getInvestmentAccount({ pageLimit, keyword }: GetInvestmentAccount) {
    return clientAPI.get(this.baseQueryString, {
      params: {
        name_like: keyword,
        _page: pageLimit,
        _limit: 200,
      },
    });
  }
}

export default new UserListRepository();
