import styled from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => theme.flexDefault}
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 30px;
  box-shadow: 10px 10px 10px rgb(1, 1, 1);
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexDefault}
  gap: 18px;
`;

export const IconContainer = styled(ButtonContainer)``;
