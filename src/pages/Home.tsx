import { HomeStyled } from './styles/Home'
import {Products} from '../components/Products/products.jsx'
import {CartList} from '../components/CartList/CartList.jsx'
import {InputSearch } from '../components/Forms/InputSearch/InputSearch.jsx'
import { useContext } from 'react'
import { UserContext } from '../contexts/userContext/UserContext'
import { Logo } from '../components/Logo/Logo'



function HomePage(){

  const {logout}=useContext(UserContext)

  return (
    <HomeStyled>
      <header>
        <div className='container'>
          <Logo className={''}/>
          <nav>
            <InputSearch/>
            <div className='cart'>
              <p className='itens'>0</p>
              <span className="material-symbols-outlined shoppingCart">shopping_cart</span>
            </div>
            <span onClick={logout} className="material-symbols-outlined">logout</span>
          </nav>
        </div>
      </header>
      <main>
        <div className='container'>
            <Products />
            <CartList />
        </div>
      </main>   
    </HomeStyled>
  )
}

export{HomePage}