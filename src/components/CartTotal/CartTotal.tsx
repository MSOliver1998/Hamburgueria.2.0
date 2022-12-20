import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/CartContext'
import { ButtonStyled } from '../Button/Button.js'
import {CartTotalStyled} from './CartTotalStyled'


function CartTotal(){

    const{removeAll,cart}=useContext(CartContext)

    return(
        <>
            <CartTotalStyled>
                <div>
                    <p>Total</p>
                    <p>R$: {cart.map(product=>product.price*product.quantidade).reduce((current:number,previus:number)=>current+previus,0).toFixed(2)}</p>
                </div>
                <ButtonStyled onClick={removeAll} className={'remove'}>Remover Todos</ButtonStyled>
            </CartTotalStyled>
        </>
    )
}

export {CartTotal}