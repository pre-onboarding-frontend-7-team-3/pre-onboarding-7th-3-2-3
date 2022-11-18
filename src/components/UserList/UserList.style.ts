import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flexDefault}
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const FilterContainer = styled.div`
  ${({ theme }) => theme.flexDefault}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flexDefault}
`;

export const Button = styled.button`
  ${({ theme }) => theme.flexCenter}
  min-width: 110px;
  padding: 8px 14px;
  margin-right: 10px;
  background: #3c6dba;
  border-radius: 43px;
  color: #fff;
  box-shadow: 0px 1px 2px rgba(9, 16, 55, 0.4);
  cursor: pointer;
`;

export const customTableStyle = {
  container: { minWidth: "1100px" },
  table: { minWidth: 650 },
};
