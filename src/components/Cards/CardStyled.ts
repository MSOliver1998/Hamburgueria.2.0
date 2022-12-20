import styled from 'styled-components'

const CardStyled=styled.li`

    display: flex;
    background-color: var(--color-grey-4);
    border-radius: var(--size-6);
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-width: 300px;
    min-height: 346px;
    list-style: none;
    margin: 15px;
    padding-bottom:18px;

    img{
        background-color: var(--color-grey-3);
        object-fit: contain;
        width: 100%;
        height: 150px;
    }

    .info{  
        width: 100%;
        padding:21px;
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap:15px
    }

    .price{
        color: var(--color-brand-1);
        font-size: var(--size-2);
    }

    button{
        width: 40%;
    }

`

const CartCardStyled=styled.li` 

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px 0px;
    padding: 15px 0px;
    width: 100%;

    img{
        background-color: var(--color-grey-3);
        height: 50px;
        width: 50px;
    }

    h3{
        white-space: nowrap;
        max-width: 10ch;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .button{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    button{
        display:flex;
        align-items: center;
        justify-content: center;
        height: 5px;
        width: 5px;
        font-size: 20px;
    }

`

export {CardStyled,CartCardStyled}