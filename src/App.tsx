import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext/CartContext.js'
import { ProductsProvider } from './contexts/productsContext/ProductsContext.js'
import { UserProvider } from './contexts/userContext/UserContext.js'
import { RoutesAplication } from './routes/Routes.js'
import { AppStyled } from './styles/App.js'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App(): JSX.Element {

  return (
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              <AppStyled>
                <RoutesAplication/>
                <ToastContainer autoClose={1500}/>
              </AppStyled>
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
  )
}

export {App}
