import { AuthService } from "./AuthService";
import { AxiosHttpClient } from "./AxiosHttpClient";
import { LocalTokenRepository } from "./LocalTokenRepository";

const tokenRepository = new LocalTokenRepository("accessToken")
const httpClient = new AxiosHttpClient(import.meta.env.VITE_API_URL || "")
const authService = new AuthService(httpClient, tokenRepository)

export { authService, tokenRepository };
//token 필요?