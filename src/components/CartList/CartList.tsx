import React from 'react'
import { useContext } from "react"
import {CartTotal} from '../CartTotal/CartTotal'
import { CartListStyled } from "./CartListStyled"
import { CardCart } from "../Cards/Card.jsx"
import { CartContext } from '../../contexts/CartContext/CartContext'

function CartList(){

    const {cart}=useContext(CartContext)

    return(
        <CartListStyled>
            <h2 className={'title'}>Carrinho de Compras</h2>
            <div className={'list'}>
                {cart.map(product=><CardCart key={product.id} product={product} />)}
            </div>
            <CartTotal/>    
        </CartListStyled>
    )
}

export{CartList}