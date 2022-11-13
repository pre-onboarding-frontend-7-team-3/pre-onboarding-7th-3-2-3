import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./style/Theme";
import GlobalStyle from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </RecoilRoot>
);
