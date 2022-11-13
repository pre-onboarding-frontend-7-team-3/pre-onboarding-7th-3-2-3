import axios from "axios";

export class AxiosHttpClient {
  #baseURL :string;
  #client: any;
  
  constructor(baseURL :string) {  
    this.#baseURL = baseURL;
    this.#client = axios.create({baseURL: this.#baseURL});
  }

  async post(endPoint:string, options = {}) {
    // return this.#client.post(this.#baseURL + endPoint, {...options, headers:{
    return this.#client.post(endPoint, {...options})
  }

  async get(endPoint:string, options={headers:{}}) {
    return this.#client.get(endPoint, {...options})
  }
}
