if (import.meta.env.PROD) {
  window.global ||= window
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppContainer from '@/appContainer'
import 'src/common/i18n'
import '@/index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
