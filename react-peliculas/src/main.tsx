import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/leaflet/dist/leaflet.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
