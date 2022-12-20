import { RegisterForm } from "../components/Forms/Register/Register"
import { RegisterPageStyled } from "./styles/Register"
import {Logo} from '../components/Logo/Logo'

function RegisterPage(){
    return(
        <RegisterPageStyled>
            <header>
                <Logo/>
            </header>
            <main>
            <div className='box'>
                    <span className="material-symbols-outlined buy">local_mall</span>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
                </div>
                <RegisterForm/>
            </main>
        </RegisterPageStyled>
    )
}

export{RegisterPage}