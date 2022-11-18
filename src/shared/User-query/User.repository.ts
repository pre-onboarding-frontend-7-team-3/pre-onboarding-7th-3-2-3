import clientAPI from "@src/libs/api/client";
import { FormDataType, GetInvestmentAccount } from "./User.model";

class UserRepository {
  getUserList({ pageNum, q }: GetInvestmentAccount) {
    return clientAPI.get("/users?_embed=userSetting", {
      params: {
        name_like: q,
        _page: pageNum,
        _limit: 20,
      },
    });
  }

  deleteUser(userId: string) {
    return clientAPI.delete(`/users/${userId}`);
  }

  editUserName = (id: string, value: any) => {
    return clientAPI.patch(`/users/${id}`, value);
  };

  getUserAllAccount = (userId: string) => {
    return clientAPI.get(`/accounts?userId=${userId}`);
  };

  getUserSetting = (userId: string) => {
    return clientAPI.get(`/userSetting/${userId}`);
  };

  getUserDetail = (userId: string) => {
    return clientAPI.get(`/users/${userId}`);
  };

  getAllUserDetail = () => {
    return clientAPI.get(`/users`);
  };

  createNewUser(formData: FormDataType) {
    return clientAPI.post("/users", formData);
  }
}

export default new UserRepository();
