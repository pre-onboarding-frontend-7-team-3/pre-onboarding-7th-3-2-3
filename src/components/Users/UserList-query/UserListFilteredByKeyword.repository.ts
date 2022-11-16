import clientAPI from '@src/libs/api/client';

type Props = {
  keyword: string;
};

class UserListFilteredByKeywordRepository {
  // private baseEndPoint: string = '/users?name_like=';
  private baseEndPoint: string = '/users';

  // /accounts?_expand=user
  // /users?_expand=user
  // http://localhost:4000/users?_expand=setting&q=lo
  getUserListFilteredByKeyword({ keyword }: Props) {
    console.log(`KEYWORD : `,keyword)
    return clientAPI.get(this.baseEndPoint + keyword);
  }
}
export default new UserListFilteredByKeywordRepository();

