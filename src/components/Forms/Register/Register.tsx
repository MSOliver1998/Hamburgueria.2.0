import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterSchema } from "../Schemas/RegisterSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonStyled } from "../../Button/Button";
import { FormStyled } from "../Form";
import { Input } from "../Inputs/Input";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext/UserContext";

interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

function RegisterForm() {
  const { submit } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(RegisterSchema),
  });

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <div className="header">
        <h1>cadastro</h1>
        <Link to="/">Voltar</Link>
      </div>
      <Input
        type="text"
        id="name"
        placeholder="Insira seu nome"
        register={register("name")}
      >
        Nome
      </Input>
      {errors.name && <p>{errors.name.message}</p>}
      <Input
        type="email"
        id="email"
        placeholder="Insira seu email"
        register={register("email")}
      >
        Email
      </Input>
      {errors.email && <p>{errors.email.message}</p>}
      <Input
        type="password"
        id="password"
        placeholder="Insira uma senha"
        register={register("password")}
      >
        Senha
      </Input>
      {errors.password && <p>{errors.password.message}</p>}
      <Input
        type="password"
        id="password2"
        placeholder="confirme sua senha"
        register={register("confirmPass")}
      >
        Confimar senha
      </Input>
      {errors.confirmPass && <p>{errors.confirmPass.message}</p>}
      <ButtonStyled>Cadastrar</ButtonStyled>
    </FormStyled>
  );
}

export { RegisterForm };
