import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteApp from './Routes/routes.jsx'
import './styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteApp />
  </StrictMode>,
)
