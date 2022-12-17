import styled from 'styled-components'

const NotFoundStyled=styled.div`
    background-color: grey;
    color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        color: white;
        cursor: pointer;
        padding: 10px;
        background-color: green;
        margin: 10px;
        border-radius: 50px;
    }
`

export {NotFoundStyled}
