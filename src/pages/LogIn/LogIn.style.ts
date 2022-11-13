import styled from 'styled-components';

export const LogInWrapper = styled.section`
  ${({ theme }) => theme.flexCenter};
  background-color: ${(props: any) => props.theme.bg.grey};
  height: 100vh;
  width: 100vw;
`;
