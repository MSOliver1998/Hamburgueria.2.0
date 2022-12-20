import styled from "styled-components";


const RegisterPageStyled=styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header{
        padding: 10px;
        width: 100%;
        background-color: white;
    }

    main{
        .box{
            margin: 15px;
            display: flex;
            border: 1px solid var(--color-grey-3);
            align-items: center;
            padding: 10px;
            gap:16px;
            
            .buy{
                background-color:rgba(39, 174, 96, 0.1);;
                padding:8px;
                color:var(--color-brand-1) ;
            }

            p{
                width: 300px;
                color: var(--color-grey-1);
                span{
                    font-weight: 700;
                    color: black;
                }
            };
        }

    }

`

export {RegisterPageStyled}