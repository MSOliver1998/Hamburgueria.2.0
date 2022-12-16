import {LogoStyled} from './Logo.js'

function Logo({className}){
    return(
        <LogoStyled className={className}>Burguer<span> Kenzie</span></LogoStyled>
    )
}

export {Logo}