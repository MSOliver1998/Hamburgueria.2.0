import styled from 'styled-components'

const ProductsStyled=styled.ul`

    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    display: flex;
    width: 100%;
    padding: 15px;
    overflow: auto;

    @media(min-width:900px){
        width: 70%;
        justify-content: space-around;
        flex-wrap: wrap;
    }

`

export {ProductsStyled}