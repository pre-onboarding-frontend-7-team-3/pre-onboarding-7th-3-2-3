import { AccountType } from './../../types/account';
import { AxiosResponse } from 'axios';
import clientAPI from './client';

const investmentService = {
  login: async (authInputs: any): Promise<any> => {
    const { data } = await clientAPI.post('/login', authInputs);
    return data;
  },
  getAccounts: async (): Promise<AxiosResponse<AccountType[]>> => {
    const { data } = await clientAPI.get('/users');
    return data;
  },
};

export default investmentService;
