import styled from 'styled-components'

const AppStyled=styled.div`

    .container{
        width: 300px;
        margin: 0 auto;
    }


    header{
        background-color: var(--color-grey-3);
        display: flex;
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

export {AppStyled}