import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'

// or using a ESM bundler which resolves CSS files as modules:
import '@blueprintjs/core/lib/css/blueprint.css'
import 'normalize.css'
// include blueprint-icons.css for icon font support
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../css/app.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
