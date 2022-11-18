import clientAPI from '../../../libs/api/client';

class LoginRepository {
  private baseQueryString: string = '/users/signin';

  handleLogin(authInputs) {
    return clientAPI.post(this.baseQueryString, authInputs);
  }
}

export default new LoginRepository();
