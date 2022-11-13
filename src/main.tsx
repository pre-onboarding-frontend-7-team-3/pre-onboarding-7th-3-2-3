import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './style/GlobalStyle'
import './index.css'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>    
      <GlobalStyle />
    <App />
    <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>

  // </React.StrictMode>
)
