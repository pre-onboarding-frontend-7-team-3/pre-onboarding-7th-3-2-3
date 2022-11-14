import styled from "styled-components";

export const Container = styled.header`
  ${({ theme }) => theme.flexDefault}
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 30px;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexDefault}
  gap: 18px;
`;

export const IconContainer = styled(ButtonContainer)``;
