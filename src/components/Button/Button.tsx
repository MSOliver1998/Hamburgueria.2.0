import React from "react"

function Button({className,id,onClick,children}): JSX.Element{
    return(
        <button className={className} id={id} onClick={onClick}>{children}</button>
    )
}

export {Button}