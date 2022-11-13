import { authService } from '@src/api'
import { loginState } from '@src/store/auth'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useRecoilValue} from 'recoil'


const useAuth = ()=> {
  
  const nav = useNavigate()
  useEffect(()=> {
    if (!authService.isLogined) {
      nav('/auth')
    }
  },[])
  return ;
}

export default useAuth;