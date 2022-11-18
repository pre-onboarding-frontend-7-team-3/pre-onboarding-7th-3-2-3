import styled from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => theme.flexCenter}
  flex-direction:column;
  width: 100vw;
  height: 100vh;
`;

export const NotFoundText = styled.h1``;
