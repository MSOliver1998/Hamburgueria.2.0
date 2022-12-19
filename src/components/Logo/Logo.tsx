import React from 'react'
import {LogoStyled} from './Logo'

interface iLogo{
    className:string
}

function Logo({className}:iLogo){
    return(
        <LogoStyled className={className}>Burguer<span> Kenzie</span></LogoStyled>
    )
}

export {Logo}