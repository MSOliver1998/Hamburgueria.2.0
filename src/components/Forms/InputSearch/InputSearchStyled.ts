import styled from "styled-components"

const InputSearchStyled=styled.form`

    .search{
        position: relative;

        input{
            height: 30px;
            width: 250px;
            padding: 0px 5px;
            border-radius: 8px;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: 700;
            width: 30px;
            height: 30px;
            position: absolute;
            right: -3px;
            top: 0px;
        }
    }

`

export{InputSearchStyled}
