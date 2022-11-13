export class LocalTokenRepository {
  #TOKEN_KEY

  constructor(TOKEN_KEY:string) {
    this.#TOKEN_KEY = TOKEN_KEY
  }
  save(token: string) {
    sessionStorage.setItem(this.#TOKEN_KEY,token)
  }
  get() {
    return sessionStorage.getItem(this.#TOKEN_KEY)
  }
  remove() {
    sessionStorage.removeItem(this.#TOKEN_KEY)
  }
}