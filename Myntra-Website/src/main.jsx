import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import WomenContext from './WomenContext.jsx'
import MensData from './MensData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <WomenContext>
            
              <MensData>
                <App />
              </MensData>
            
          </WomenContext>
      </BrowserRouter>
  </StrictMode>,
)
