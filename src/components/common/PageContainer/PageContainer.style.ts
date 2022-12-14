import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexColumn}
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.bg.lightGrey};
`;
