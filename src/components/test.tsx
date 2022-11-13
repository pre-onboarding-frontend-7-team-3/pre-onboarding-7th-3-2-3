import { authService } from '@src/api';
import axios from 'axios'
function test() {
  console.log(import.meta.env.VITE_API_URL, "이")
  // const p = new URLSearchParams()
  // p.append('email', "1@3.355")
  // p.append("password", "3123123123123")
  
  // axios.post('http://localhost:4000/users/signup',{email : "newface@dco.com" , password: 'super-strong-password'})
  // axios.post('http://localhost:4000/users/signup', p)
  authService.signin("newface@dce.com", "super-strong-password")
  return <div>test</div>; 
}

export default test;
