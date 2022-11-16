import clientAPI from "@src/libs/api/client";

type GetInvestmentAccount = {
  broker_id?: string;
  is_active?: boolean;
  status?: string;
  keyword?: string;
  pageLimit: number;
};
class UserListRepository {
  private baseQueryString: string = "/accounts?_expand=user&name_like=home";

  getInvestmentAccount({ pageLimit }: GetInvestmentAccount) {
    return clientAPI.get(
      "users?_embed=userSetting&name_like=&is_active=false&is_staff=true"
    );
  }
}

export default new UserListRepository();
