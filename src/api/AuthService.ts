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
  
  signin(email:string, password:string) {
    this.#httpClient.post('users/signin', {data: {email, password}})
  }
}