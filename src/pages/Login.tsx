import { LoginForm } from "../components/Forms/Login/Login";
import {Logo} from '../components/Logo/Logo.jsx'
import { LoginPageStyled } from "./styles/Login";

function LoginPage(){
    return(
        <LoginPageStyled>
            <header>
                <Logo/>
            </header>
            <main>
                <div className='box'>
                    <span className="material-symbols-outlined buy">local_mall</span>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                </div>
                <LoginForm/>
            </main>
        </LoginPageStyled>
    )
}

export{LoginPage}