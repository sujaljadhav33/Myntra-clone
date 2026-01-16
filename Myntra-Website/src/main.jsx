import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './DataProvider.jsx'
import { CartProvider } from './CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <DataProvider>
          <CartProvider>
            
              <App />
            
          </CartProvider>
        </DataProvider>
      </BrowserRouter>
  </StrictMode>,
)
