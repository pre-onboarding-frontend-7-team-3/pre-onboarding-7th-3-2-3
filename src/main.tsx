import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/Theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
