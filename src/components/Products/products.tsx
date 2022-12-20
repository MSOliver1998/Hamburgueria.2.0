import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../contexts/productsContext/ProductsContext.js'
import {CardProduct} from '../Cards/Card'
import { ProductsStyled } from './ProductsStyled.js'


function Products(){

    const {filtro,productsList}=useContext(ProductsContext)

    return(
        <ProductsStyled className={'list'}>
            {
                !filtro ?
                productsList.map(product=><CardProduct key={product.id}  product={product}/>)
                :
                (
                    productsList.filter(el=>el.category.toLowerCase().includes(filtro.toLowerCase()) || el.name.toLowerCase().includes(filtro.toLowerCase())).map(product=><CardProduct key={product.id} product={product}/>)
                )

            }
        </ProductsStyled>
    )
}

export {Products}