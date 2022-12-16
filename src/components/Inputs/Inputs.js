import styled from 'styled-components'

const FormStyled=styled.form`

    background-color: azure;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 15px;

    input{
        position: relative;
        height: 40px;
        width: 300px;
        padding: 0px 8px; 
    }

    button{
        position: absolute;
        right:5px;
    }

    @media (min-width: 600px){
            max-width: 300px;
            margin-top: 0px;
    }

`

export{FormStyled}