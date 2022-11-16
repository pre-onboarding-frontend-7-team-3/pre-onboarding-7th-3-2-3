import clientAPI from '@src/libs/api/client';

class UserListFilteredByKeywordRepository {
  private baseEndPoint: string = '/users?q=';
  // /users?_expand=user
  // http://localhost:4000/users?_expand=setting&q=lo
  getUserListFilteredByKeyword({ keyword }: string) {
    return clientAPI.get(this.baseEndPoint + keyword);
  }
}
export default new UserListFilteredByKeywordRepository();
