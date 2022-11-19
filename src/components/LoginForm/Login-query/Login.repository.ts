import clientAPI from '../../../libs/api/client';

type Props = {
  email: string;
  password: string;
};

class LoginRepository {
  private baseQueryString: string = '/login';

  handleLogin(authInputs: Props) {
    return clientAPI.post(this.baseQueryString, authInputs);
  }
}

export default new LoginRepository();
