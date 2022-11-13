export class LocalTokenRepository {
  #TOKEN_KEY

  constructor(TOKEN_KEY:string) {
    this.#TOKEN_KEY = TOKEN_KEY
  }
  save(token: string) {
    localStorage.setItem(this.#TOKEN_KEY,token)
  }

  get() {
    return localStorage.getItem(this.#TOKEN_KEY)
  }
  remove() {
    localStorage.removeItem(this.#TOKEN_KEY)
  }
}

