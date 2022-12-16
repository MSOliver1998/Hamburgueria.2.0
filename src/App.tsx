import { useState } from 'react'
import { RoutesAplication } from './routes/Routes.js'
import { AppStyled } from './styles/App.js'

function App() {
  const[cart,setCart]=useState([])
  const[filtro,setFiltro]=useState()

  return (
    <AppStyled>
      <RoutesAplication/>
    </AppStyled>
  )
}

export {App}
