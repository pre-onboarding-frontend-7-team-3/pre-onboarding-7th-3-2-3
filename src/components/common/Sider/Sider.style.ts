import styled from "styled-components";

export const Container = styled.aside<{ isSiderVisible: boolean }>`
  ${({ theme }) => theme.flexColumn}
  width: ${({ isSiderVisible }) => (isSiderVisible ? "20vw" : "0")};
  color: white;
  background-color: #041627;
  transition: width 0.3s ease;
`;

export const Heading = styled.div`
  padding: 17px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 2px;
`;

export const LogoutButton = styled.div`
  ${({ theme }) => theme.flexDefault}
  gap: 12px;
  min-width: 150px;
  padding: 14px 0 14px 30px;
  font-size: 14px;
  font-weight: 900;
  background-color: #041627;
  cursor: pointer;
`;

export const activeStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minWidth: "150px",
  padding: "14px 0 14px 40px",
  fontSize: "14px",
  fontWeight: "900",
  backgroundColor: "#458FF7",
};

export const inactiveStyle = {
  ...activeStyle,
  padding: "14px 0 14px 30px",
  backgroundColor: "#041627",
};
