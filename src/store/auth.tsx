import { authService, tokenRepository } from '@src/api'
import {atom} from 'recoil'

export const loginState = atom({
  key: "login",
  default: authService.isLogined()
})