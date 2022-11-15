import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
}
input, button {
  outline: none;
  border: none;
  cursor: pointer;
}
a{
  text-decoration: none;
  color: white;
}
`;

export default GlobalStyles;
