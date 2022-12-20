import React, { InputHTMLAttributes,useContext } from "react";
import { UseFormRegisterReturn } from "react-hook-form";


interface iInput extends InputHTMLAttributes<HTMLInputElement>{
    register?: UseFormRegisterReturn;
    children?: React.ReactNode;
    placeholder: string;
    label?: string;
}

function Input({children,id,placeholder,register,type, ...rest}:iInput){
    return(
        <div>
            <label htmlFor={id}>{children}</label>
            <input placeholder={placeholder} type={type} id={id} {...register} {...rest} />
        </div>
    )
}


export {Input}


