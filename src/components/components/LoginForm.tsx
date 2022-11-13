import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { loginApi } from "../../api/login";

import { BsPerson } from "react-icons/bs"
import {AiOutlineLock, AiOutlineLogin} from "react-icons/ai"




const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail]= useState<string>("");
    const [password, setPassword] = useState<string>("")

    const handleChangeEm = (e) =>{
        setEmail(e.target.value)
    }
    const handleChangePw = (e) =>{
        setPassword(e.target.value)
    }

    const LoginHandler = () => {
        const onSubmit =(e:{
            preventDefault: ()=> void;
            currentTarget: HTMLFormElement | undefined;
        })=>{
            e.preventDefault();
            const data = new FormData(e.currentTarget);
        
        loginApi(email, password).then((res)=>{
            console.log("로그인성공응답", res);
            localStorage.setItem("access_token", res.data.accessToken)
            navigate("/admin");
        })
        .catch((error)=> {
            console.log("에러",error);
            window.alert("실패");
        })
    }}


    return(<LoginContainer>
  
        <h3><BsPerson />로그인</h3>
        <InputDiv>
        <div><BsPerson />
        <input 
        placeholder="이메일을 입력하세요"
        type="text"
        onChange={handleChangeEm }
        />
        </div>
        <div><AiOutlineLock />
        <input placeholder="비밀번호를 입력하세요"
        type="password"
        onChange={handleChangePw}
        />
        </div>
        <button onClick={LoginHandler}><AiOutlineLogin />  로그인</button>
        </InputDiv>
    </LoginContainer>

    )
}

export default LoginForm;

const LoginContainer = styled.form`
background-color: #ffffff;

width: 350px;
height: 280px;
margin: 0 38vw;

box-shadow: 5px 5px 5px #e7e7e7;


h3{
    background-color: #fafafa;
    height: 18%;
    padding: 13px;
}


`

const InputDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display:flex;

  div{
    width: 300px;
    height: 35px;

    padding: 5px;
    margin: 10px auto;

    border: 1px solid #e7e7e7;
  }

  input {
    margin: 0px 0px 10px 5px;
  }

  button {
    width: 300px;
    height: 35px;
    margin: 20px auto;

    color: grey;
  }
`
