import styled from "styled-components";

export const BackgroundColor = styled.div`
  background-color: #f0f2f5;
  width: 100vw;
  height: 100vh;
`;

export const AuthLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 90;
`;

export const Logo = styled.div`
  margin-bottom: 40px;
  font-size: 50px;
  color: #051527;
  font-weight: 800;
`;

export const LoginContainer = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 17px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 2px 2px 5px 2px #dadce0;
`;
export const LoginTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 700;
  border-bottom: 1px solid #f6f6f6;
  background-color: #fafafa;
`;
export const IdInput = styled.input`
  height: 35px;
  border: 2px solid #f0f2f5;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;
export const PassWordInput = styled(IdInput)``;
export const SubmitButton = styled.button`
  background-color: #f5f5f5;
  height: 35px;
  border: 2px solid #f0f2f5;
  border-radius: 7px;
`;
