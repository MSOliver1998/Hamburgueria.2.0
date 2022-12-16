import { FormStyled } from "../Form";
import { Input } from "../Inputs/Input";

function LoginForm(){

    return(
        <FormStyled>
            <Input id={'name'} type={'text'} placeholder={'insira seu nome'}>Nome:</Input>
            <Input id={'senha'} type={'password'} placeholder={'Insira sua senha'}>Senha:</Input>
            <button type="submit">Logar</button>
        </FormStyled>
    )
}

export{LoginForm}