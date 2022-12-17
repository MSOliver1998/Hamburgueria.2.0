import { Link } from "react-router-dom"
import { NotFoundStyled } from "./styles/NotFound"

function NotFoundPage(){
    return(
        <NotFoundStyled>
            <h1>Erro 404 Página não encontrada</h1>
            <p>A página procurada está indisponivel ou não existe</p>
            <Link to='/'>Voltar para a pagina login</Link>
            <Link to='register'>Voltar para página de cadastro</Link>
        </NotFoundStyled>
    )
}

export {NotFoundPage}