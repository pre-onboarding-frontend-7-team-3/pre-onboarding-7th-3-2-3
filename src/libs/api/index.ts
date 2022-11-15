import { AccountType } from './../../types/account';
import clientAPI from './client';

const investmentService = {
  login: async (authInputs: any): Promise<any> => {
    console.log('login');

    try {
      const { data } = await clientAPI.post('/login', authInputs);
      return data;
    } catch (error: any) {
      console.log('login error', error);
      throw new Error(error);
    }
  },
  getAccounts: async (): Promise<AccountType[]> => {
    try {
      const { data } = await clientAPI.get('/accounts');
      return data;
    } catch (error: any) {
      console.log('get accountserror', error);
      throw new Error(error);
    }
  },
};

export default investmentService;
