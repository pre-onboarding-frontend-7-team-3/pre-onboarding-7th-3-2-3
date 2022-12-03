import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}

body {
  margin: 0;
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
