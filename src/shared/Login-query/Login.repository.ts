import clientAPI from '@src/libs/api/client';
import { authInputProps } from './Login.model';

class LoginRepository {
  private baseQueryString: string = '/login';

  handleLogin(authInputs: authInputProps) {
    return clientAPI.post(this.baseQueryString, authInputs);
  }
}

export default new LoginRepository();
