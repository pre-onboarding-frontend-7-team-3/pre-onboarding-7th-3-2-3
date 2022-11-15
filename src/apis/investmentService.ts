import { AxiosResponse } from 'axios';
import { HttpClient } from './httpClient';

type LogInData = {
  email: string;
  password: string;
};

interface IinvestmentService {
  logIn({ email, password }: LogInData): Promise<AxiosResponse<any, any>>;
}

export class InvestmentService implements IinvestmentService {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async logIn({
    email,
    password,
  }: LogInData): Promise<AxiosResponse<any, any>> {
    const res = await this.httpClient.request({
      method: 'POST',
      url: '/login',
      data: { email, password },
    });

    return res;
  }
}
