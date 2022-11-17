import clientAPI from '../../../libs/api/client';

type Props = {
  formData: object;
};

class NewUserModalRepository {
  private baseQueryString: string = '/users';

  createNewUser(formData: Props) {
    return clientAPI.post(this.baseQueryString, formData);
  }
}

export default new NewUserModalRepository();
