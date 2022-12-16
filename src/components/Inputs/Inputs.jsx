import {ButtonStyled} from '../Button/Button.js'
import { FormStyled } from './Inputs'

function InputSearch({onChange,id,type,className,value,placeholder,setFiltro}){

    function sendSearch(event){
        event.preventDefault()
        setFiltro(event.target.children[0].value)
        event.target.children[0].value=''
    }

    return(
        <FormStyled onSubmit={sendSearch}>
            <input onChange={onChange} id={id} type={type} className={className} value={value} placeholder={placeholder}></input>
            <ButtonStyled type={'submit'}>Pesquisar</ButtonStyled>
        </FormStyled>
    )
}

function Label({htmlFor,children}){
    <label htmlFor={htmlFor}>{children}</label>
}

export{InputSearch}