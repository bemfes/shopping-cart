import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary fallback={<p>Sorry, it looks like an unexpected error has occurred.</p>}>
    <StrictMode>
      <BrowserRouter><App /></BrowserRouter>
    </StrictMode>
  </ErrorBoundary>,
)
