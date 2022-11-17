import clientAPI from '@src/libs/api/client';

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  q?: string;
  pageNum: number;
};
class UserListRepository {
  private baseQueryString: string = 'users?_embed=userSetting';

  getInvestmentAccount({ pageNum, q }: GetInvestmentAccount) {
    return clientAPI.get(this.baseQueryString, {
      params: {
        name_like: q,
        _page: pageNum,
        _limit: 20,
      },
    });
  }
}

export default new UserListRepository();
