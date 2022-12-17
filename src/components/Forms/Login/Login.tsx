import { Link } from "react-router-dom";
import { ButtonStyled } from "../../Button/Button";
import { FormStyled } from "../Form";
import { Input } from "../Inputs/Input";

function LoginForm(){

    return(
        <FormStyled>
            <div className='header'>
                <h1>Login</h1>
            </div>
            <Input id={'email'} type={'email'} placeholder={'insira seu email'}>email:</Input>
            <Input id={'senha'} type={'password'} placeholder={'Insira sua senha'}>Senha:</Input>
            <ButtonStyled type="submit">Logar</ButtonStyled>
            <Link to='register'>não possui login faça já seu cadastro!</Link>
        </FormStyled>
    )
}

export{LoginForm}