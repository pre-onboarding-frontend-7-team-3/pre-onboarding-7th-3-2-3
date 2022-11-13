import axios, { Axios, AxiosError } from "axios";

export class AxiosHttpClient {
  #baseURL :string;
  #client: any;
  
  constructor(baseURL :string) {  
    this.#baseURL = baseURL;
    this.#client = axios.create({baseURL: this.#baseURL});
  }

  async post(endPoint:string, options = {}) {
      return await this.#client.post(endPoint, {...options}).then((res :Axios) => res).catch((err: AxiosError)=> err.response)
  }

  async get(endPoint:string, options={headers:{}}) {
    return await this.#client.get(endPoint, {...options})
  }
}
