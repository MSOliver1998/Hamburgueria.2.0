import styled from 'styled-components'

const HomeStyled=styled.div`

    .container{
        width: 300px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        nav{
            display: flex;
            align-items: center;
            gap:8px;

            .cart{
                position: relative;
                padding: 15px 0px;
                .shoppingCart{
                    z-index: 1;
                    position: relative;
                }
                p{
                    z-index: 2;
                    font-weight: 900;
                    color: var(--color-brand-1);
                    position: absolute;
                    left: 30%;
                    top:0px
                }
            }
        }
    }


    @media (min-width:900px){
        .container{
            display: flex;
            justify-content: space-between;
            padding: 15px 0px;
            width: 80%;
        }
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
        }
    }

`

export {HomeStyled}