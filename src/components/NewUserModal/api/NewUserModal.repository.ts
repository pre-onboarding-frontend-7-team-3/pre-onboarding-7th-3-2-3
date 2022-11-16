import clientAPI from '../../../libs/api/client';

type Props = {
  formData: object;
};

class NewUserModalRepository {
  private baseEndPoint: string = '/users';

  createNewUser(formData: Props) {
    return clientAPI.post(this.baseEndPoint, formData);
  }
}

export default new NewUserModalRepository();
