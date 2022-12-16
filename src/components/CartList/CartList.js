import styled from 'styled-components'

const CartListStyled=styled.ul`
    
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-4);
    justify-content: space-between;
    width: 300px;
    height: fit-content;

    .list{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        overflow-y:auto;
        overflow-x: hidden;
        height: 300px;
        padding: 0px 15px;
    }

    h2{
        justify-content: flex-start;
        background-color: var(--color-brand-1);
        color:var(--color-grey-4);
        display:flex;
        align-items: center;
        width: 100%;
        border-radius: 8px 8px 0px 0px;
        padding: 10px 20px;
    }
    
`

export {CartListStyled}