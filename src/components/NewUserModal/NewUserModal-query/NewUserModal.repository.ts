import clientAPI from "../../../libs/api/client";
import { FormDataType } from "./NewUserModal.query";

class NewUserModalRepository {
 private baseEndPoint: string = "/users";

  createNewUser(formData: FormDataType) {
    return clientAPI.post(this.baseEndPoint, formData);
  }
}

export default new NewUserModalRepository();
