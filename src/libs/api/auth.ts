import { AxiosResponse } from 'axios';
import clientAPI from './client';

const AuthAPI = {
  login: async (authInputs: any): Promise<any> => {
    const { data } = await clientAPI.post('/login', authInputs);
    return data;
  },
};

export default AuthAPI;
