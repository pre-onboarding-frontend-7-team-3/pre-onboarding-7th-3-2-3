import styled from 'styled-components';

export const LogInWrapper = styled.section`
  ${({ theme }) => theme.flexCenter};
  background-color: ${(props: any) => props.theme.bg.grey};
  height: 100vh;
  width: 100vw;
`;

export const LogInForm = styled.form`
  ${({ theme }) => theme.flexColumn};
  background: ${({ theme }) => theme.bg.white};
  border-radius: 10px;
  width: 40%;
  height: 70%;
  padding: 1rem;
`;

export const LogInInput = styled.input`
  width: 90%;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem;
  border: 2px solid ${({ theme }) => theme.bg.grey};
  :focus {
    outline: none;
  }
`;

export const LogInButton = styled.button`
  margin: 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.bg.grey};
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.darkBlue};
`;
