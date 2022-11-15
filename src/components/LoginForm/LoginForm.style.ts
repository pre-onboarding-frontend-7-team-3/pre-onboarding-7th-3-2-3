import styled from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => theme.flexDefault}
  height: 100vh;
`;

export const Form = styled.form`
  ${({ theme }) => theme.flexColumn}
  align-items: center;
  width: 650px;
  min-width: 400px;
  height: 600px;
  min-height: 550px;
  gap: 25px;
  margin: 0 auto;
  padding: 0 70px;
  border: 1px solid lightgrey;
  border-radius: 7px;
  box-shadow: 2px 2px 7px rgb(200, 200, 200);
`;

export const Logo = styled.img`
  width: 300px;
  height: 180px;
`;

export const Title = styled.h1`
  font-size: 50px;
  letter-spacing: 8px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px;
  font-size: 24px;
  font-weight: 900;
  color: white;
  border-radius: 7px;
  background-color: rgb(83, 153, 219);

  &:hover {
    background-color: #438ce2;
  }
`;

export const Copyright = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;
