import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexColumn}
  width: 100%;
  height: 90%;
  padding: 40px 30px;
  background-color: #eff2f5;
`;
