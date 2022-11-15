import axios, { type AxiosError, type AxiosResponse } from 'axios';

interface IHttpClient {
  request<T extends Promise<Response>>({
    ...options
  }: Record<string, string>): T;
}

export class HttpClient implements IHttpClient {
  private baseURL: string;
  private client: any;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.client = axios.create({ baseURL: this.baseURL });
  }

  request({ ...options }) {
    const onSuccess = (response: AxiosResponse) => response;
    const onError = (error: AxiosError) => error;

    return this.client(options).then(onSuccess).catch(onError);
  }
}
