import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexColumn}
  justify-content: center;
  width: 100%;
  gap: 40px;
`;

export const Input = styled.input`
  padding: 20px;
  font-size: 18px;
  border-radius: 10px;
  background-color: rgb(241, 241, 241);

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: -20px;
  font-weight: 900;
  color: red;
`;
