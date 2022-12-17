import { Link } from "react-router-dom";
import { ButtonStyled } from "../../Button/Button";
import { FormStyled } from "../Form";
import { Input } from "../Inputs/Input";


function RegisterForm(){

    return(
        <FormStyled>
            <div className='header'>
                <h1>cadastro</h1>
                <Link to='/'>Voltar</Link>
            </div>
            <Input type='text' id='name' placeholder='Insira seu nome'>Nome</Input>
            <Input type='email' id='email' placeholder='Insira seu email'>Email</Input>
            <Input type='password' id='password' placeholder='Insira uma senha'>Senha</Input>
            <Input type='password' id='senha2' placeholder='confirme sua senha'>Confimar senha</Input>
            <ButtonStyled>Cadastrar</ButtonStyled>
        </FormStyled>
    )

}

export {RegisterForm}