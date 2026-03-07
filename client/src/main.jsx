import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Context/Cartcontext.jsx'
import { ProductProvider } from './Context/ProductContext.jsx'
import { PaymentProvider } from './Context/PaymentContest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
    <CartProvider>
      <PaymentProvider>
    <App /> 
      </PaymentProvider>
     </CartProvider>
    </ProductProvider>
   
  </StrictMode>,
)
