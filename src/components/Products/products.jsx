import { useEffect, useState } from 'react'
import { CardProduct } from '../Cards/Card.jsx'
import { ProductsStyled } from './Products.js'
import {Api} from '../../api/axio.js'

function Products({filtro,setCart,cart}){
    const[products,setProducts]=useState([])
        
    useEffect(()=>{
        async function Requisição(){
            try{
                const response= await Api.get('/products')
                setProducts(response.data)
                
            }
            catch(err){
                console.log(err)
            }
        }
        Requisição()
    },[])

    return(
        <ProductsStyled className={'list'}>
            {
                !filtro ?
                products.map(product=><CardProduct key={product.id} cart={cart} setCart={setCart} product={product}></CardProduct>)
                :
                (
                    products.filter(el=>el.category.toLowerCase().includes(filtro.toLowerCase()) || el.name.toLowerCase().includes(filtro.toLowerCase())).map(product=><CardProduct key={product.id} cart={cart} setCart={setCart} product={product}></CardProduct>)
                )

            }
        </ProductsStyled>
    )
}

export {Products}