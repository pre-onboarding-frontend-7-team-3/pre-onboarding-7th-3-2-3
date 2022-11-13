import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-width: 120px;
  color: white;
  background-color: #041627;
`;

export const Heading = styled.div`
  padding: 17px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 2px;
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 120px;
  padding: 14px 0 14px 30px;
  font-size: 14px;
  font-weight: 900;
  background-color: #041627;
  cursor: pointer;
`;

export const activeStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  minWidth: '120px',
  padding: '14px 0 14px 40px',
  fontSize: '14px',
  fontWeight: '900',
  backgroundColor: '#458FF7',
};

export const inactiveStyle = {
  ...activeStyle,
  padding: '14px 0 14px 30px',
  backgroundColor: '#041627',
};
