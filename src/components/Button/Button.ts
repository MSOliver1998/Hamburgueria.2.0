import { Button } from "./Button.jsx";
import styled from 'styled-components'

const ButtonStyled=styled(Button)`
    
    background-color: var(--color-brand-1);
    padding: 8px var(--size-4);
    border-radius: 8px;
    border-color: var(--color-brand-2);
    cursor: pointer;
    color:var(--color-grey-4);

    &:hover{
        background-color: var(--color-brand-2);
        border-color: var(--color-brand-1);
    }

    .total{
        background-color: var(--color-grey-4);
        color: var(--color-grey-2);
        border-color: transparent;
        width: 100%;
        height: 15px;
        margin-bottom: 50px;
    }


    .remove,.remove:hover{
        display: flex;
        height: 50%;
        justify-content: center;
        align-items: center;
        background-color: var(--color-grey-4);
        color: var(--color-grey-1);
        border-color: var(--color-grey-1);
    }

    .default{
        background-color: transparent;
        width: fit-content;
    }

    @media (min-width: 900px) {
        .remove,.remove:hover{
            height: 25px;
        }
        
    }

`

export { ButtonStyled, Button };