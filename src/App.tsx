import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RoutesAplication } from './routes/Routes.js'
import { AppStyled } from './styles/App.js'

function App() {
  const[cart,setCart]=useState([])
  const[filtro,setFiltro]=useState()

  return (
    <BrowserRouter>
      <AppStyled>
        <RoutesAplication/>
      </AppStyled>
    </BrowserRouter>
  )
}

export {App}
