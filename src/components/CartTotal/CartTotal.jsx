import { ButtonStyled } from '../Button/Button.js'
import {CartTotalStyled} from './CartTotal.js'

function CartTotal({setCart,cart}){

    function removeAll(){
        setCart([])
    }

    return(
        <>
            <CartTotalStyled>
                <div>
                    <p>Total</p>
                    <p>R$: {cart.map(el=>el.price*el.quantidade).reduce((current,previus)=>current+previus,0).toFixed(2)}</p>
                </div>
                <ButtonStyled onClick={removeAll} className={'remove'}>Remover Todos</ButtonStyled>
            </CartTotalStyled>
        </>
    )
}

export {CartTotal}