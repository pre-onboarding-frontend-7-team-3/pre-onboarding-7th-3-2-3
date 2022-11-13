import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f0f2f5;
}
input, button {
  outline: none;
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyle;