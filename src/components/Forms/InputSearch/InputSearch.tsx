import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/productsContext/ProductsContext";
import { Input } from "../Inputs/Input"
import { SearchSchema } from "../Schemas/SeachSchema";
import { ButtonStyled } from "../../Button/Button";
import { InputSearchStyled} from "./InputSearchStyled";

interface isearchFormData {
    search: string;
}

function InputSearch(){

    const {sendSearch}=useContext(ProductsContext)

    const {
        register,
        handleSubmit,
        reset,
      } = useForm<isearchFormData>({
        resolver: yupResolver(SearchSchema),
      });

    return(
        <InputSearchStyled onSubmit={handleSubmit(sendSearch)}>
            <div className="search">
                <Input id='pesquisa' placeholder={'Digitar pesquisa'} register={register('search')}/>
                <ButtonStyled type={'submit'}>?</ButtonStyled>
            </div>
        </InputSearchStyled>
    )
}

export{InputSearch}

