import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface iInput extends InputHTMLAttributes<HTMLInputElement>{
    register?: UseFormRegisterReturn;
    children?: React.ReactNode;
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