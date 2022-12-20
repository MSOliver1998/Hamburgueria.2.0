import { ButtonStyled } from "../Button/Button.js";
import { CardStyled, CartCardStyled } from "./CardStyled";
import { FaTrash } from 'react-icons/fa'
import { useContext } from "react";
import { CartContext } from '../../contexts/CartContext/CartContext'
import React from "react";
import { iProduct } from "../../contexts/productsContext/ProductsContext.js";

interface iCardProductProp{
    product:iProduct
}


function CardProduct({product}:iCardProductProp){

    const{addToCart}=useContext(CartContext)

    return(
       <CardStyled>
            <img src={product.img} alt="" />
            <div className={'info'}>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p className={'price'}>R$:{product.price.toFixed(2)}</p>
                <ButtonStyled onClick={()=>addToCart(product.id)}>Adicionar</ButtonStyled>
            </div>
       </CardStyled>
    )
}

function CardCart({product}:iCardProductProp){

    const{addToCart,removeToCart,zerarInCart}=useContext(CartContext)

    return(
       <CartCardStyled>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.quantidade && `un: ${product.quantidade}`}</p>
            </div>
            <div className="button">
                <ButtonStyled  className={'remove'} onClick={()=>addToCart(product.id)}>+</ButtonStyled>
                <ButtonStyled  className={'remove'} onClick={()=>removeToCart(product.id)}>-</ButtonStyled>
            </div>
            <ButtonStyled className={'default'} onClick={()=>zerarInCart(product.id)}><FaTrash/></ButtonStyled>
           
       </CartCardStyled>
    )
}


export{CardProduct,CardCart}