/**
 * AuthService Interface
 * 1. login
 * +) Register
 */
// import httpClient from 

import { AxiosHttpClient } from "./AxiosHttpClient";
import { LocalTokenRepository } from "./LocalTokenRepository";

export class AuthService {
  #httpClient;
  #tokenRepository


  constructor(httpClient : AxiosHttpClient, tokenRepository :LocalTokenRepository) {
    this.#httpClient = httpClient;
    this.#tokenRepository = tokenRepository
  }
  
  async signin(email:string, password:string) {
    const response = await this.#httpClient.post('users/signin', {email, password})
    if (response.status === 200) {
      this.#tokenRepository.save(response.data.accessToken)
    }
    return response
  }
  isLogined() {
    return this.#tokenRepository.get()
  }
}