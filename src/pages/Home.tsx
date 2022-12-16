import { AppStyled } from './styles/App.js'
import {Logo} from './components/Logo/Logo.js'
import {InputSearch} from './components/Inputs/Inputs.js'
import { Products } from './components/Products/products.js'
import { CartList } from './components/CartList/CartList.js'


function HomePage(){
    return (
      <AppStyled>
      <header>
        <div className={'container'}>
          <Logo></Logo>
          <InputSearch setFiltro={setFiltro} id='pesquisa' placeholder={'Digitar pesquisa'} />
        </div>
      </header>
      <main>
        <div className={'container'}>
            <Products filtro={filtro} cart={cart} setCart={setCart}></Products>
            <CartList cart={cart} setCart={setCart}></CartList>
        </div>
      </main>   
      </AppStyled>
    )
}