import { ButtonStyled } from "../Button/Button.js";
import { CardStyled, CartCardStyled } from "./Card.js";
import { FaTrash } from 'react-icons/fa'


function CardProduct({product,cart,setCart}){

    function addToCart(){
        if(cart.includes(product)){
            const index=cart.indexOf(product)
            const newCart=cart.filter(el=>el.id)
            newCart[index]['quantidade']+=1
            setCart(newCart)
        }
        else{
            product['quantidade']=1
            setCart((oldCart)=>[...oldCart,product])
        }
    }

    return(
       <CardStyled>
            <img src={product.img} alt="" />
            <div className={'info'}>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p className={'price'}>R$:{product.price.toFixed(2)}</p>
                <ButtonStyled onClick={addToCart}>Adicionar</ButtonStyled>
            </div>
       </CardStyled>
    )
}

function CardCart({product,cart,setCart}){

    function removeToCart(){
        const index=cart.indexOf(product)
        if(cart[index]['quantidade']>1){
            const newCart=cart.filter(el=>el)
            newCart[index]['quantidade']-=1
            setCart(newCart)
        }
        else{
            setCart((oldCart)=>oldCart.filter(el=>el!=product))
        }
    }

    function addToCart(){
        const index=cart.indexOf(product)
        if(cart[index]['quantidade']>0){
            const newCart=cart.filter(el=>el)
            newCart[index]['quantidade']+=1
            setCart(newCart)
        }
    }

    function zerarInCart(){
        const index=cart.indexOf(product)
        if(cart[index]['quantidade']>0){
            const newCart=cart.filter(el=>el)
            newCart[index]['quantidade']=0
            newCart.splice(index,1)
            setCart(newCart)
        }
    }


    return(
       <CartCardStyled>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <p>{product.quantidade && `un: ${product.quantidade}`}</p>
            </div>
            <div className="button">
                <ButtonStyled className={'remove'} onClick={addToCart}>+</ButtonStyled>
                <ButtonStyled className={'remove'} onClick={removeToCart}>-</ButtonStyled>
            </div>
            <FaTrash onClick={zerarInCart}/>
           
       </CartCardStyled>
    )
}


export{CardProduct,CardCart}