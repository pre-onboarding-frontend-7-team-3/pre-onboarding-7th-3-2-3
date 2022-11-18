import clientAPI from '../../../libs/api/client';

class LoginRepository {
  private baseQueryString: string = '/login';

  handleLogin(authInputs) {
    return clientAPI.post(this.baseQueryString, authInputs);
  }
}

export default new LoginRepository();
