import styled from 'styled-components'

const CartTotalStyled=styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0px 15px;
    gap: 25px;

    div{
        display: flex;
        justify-content: space-between;

        p{
            font-size: 18px;
        }

        p:nth-of-type(2){
            color:var(--color-grey-2)
        }
    }


    @media(min-width:900px){
        display: flex;
        justify-content:space-between ;
    }

    button,button:hover{
        background-color: var(--color-grey-4);
        border-color: var(--color-grey-4);
        color:var(--color-grey-1);
    }

`

export {CartTotalStyled}