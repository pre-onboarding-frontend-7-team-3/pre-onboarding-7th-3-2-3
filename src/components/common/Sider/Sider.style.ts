import styled from "styled-components";

export const Container = styled.aside`
display: flex;
flex-direction: column;
width: 20vw;
color: white;
background-color: #041627;
`;

export const Heading = styled.div`
padding: 17px;
font-size: 30px;
font-weight: 900;
`;

export const activeStyle = {
  padding: '14px 0 14px 40px',
  fontSize: '14px',
  fontWeight: '900',
  backgroundColor: '#458FF7',
  transition: 'all ease 0.3s',
};

export const inactiveStyle = {
  ...activeStyle,
  padding: '14px 0 14px 30px',
  backgroundColor: '#041627',
};