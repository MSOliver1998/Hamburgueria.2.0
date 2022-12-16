import { CardCart } from "../Cards/Card.jsx"
import { CartTotal } from '../CartTotal/CartTotal.jsx'
import { CartListStyled } from "./CartList.js"

function CartList({cart,setCart}){
    return(
        <CartListStyled>
            <h2 className={'title'}>Carrinho de Compras</h2>
            <div className={'list'}>
                {cart.map(product=><CardCart key={product.id} cart={cart} product={product} setCart={setCart}></CardCart>)}
            </div>
            <CartTotal setCart={setCart} cart={cart}></CartTotal>    
        </CartListStyled>
    )
}

export{CartList}