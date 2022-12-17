import styled from "styled-components";

const FormStyled=styled.form`
    width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100vh;
    align-items: center;
    justify-content: center;

    div{
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:8px;

        label{
            color:var(--color-brand-1);
        }

        & input{
            padding: 8px;
            border-radius:4px;
        }
    }

    .header{
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        h1{
            text-transform: capitalize;
            color: var(--color-brand-1);
        }

        a{
            background-color: var(--color-brand-1);
            text-decoration: none;
            padding: 8px;
            border-radius: 8px;
            color:white;
            border: 2px solid var(--color-brand-1);

            &:hover{
                background-color: var(--color-brand-2);
            }
        }
    }

    a{
        text-decoration: none;
        color: var(--color-brand-1);
    }

    

`

export {FormStyled}