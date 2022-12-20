import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext/UserContext";
import { LoginSchema } from "../Schemas/LoginSchema";
import { ButtonStyled } from "../../Button/Button";
import { FormStyled } from "../Form";
import { Input } from "../Inputs/Input";

interface iLoginFormData {
  email: string;
  password: string;
}

function LoginForm() {
  const { Login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormData>({
    resolver: yupResolver(LoginSchema),
  });

  return (
    <FormStyled onSubmit={handleSubmit(Login)}>
      <div className="header">
        <h1>Login</h1>
      </div>
      <Input
        id={"email"}
        type={"email"}
        placeholder={"insira seu email"}
        register={register("email")}
      >
        email:
      </Input>
      {errors.email && <p>{errors.email.message}</p>}
      <Input
        id={"senha"}
        type={"password"}
        placeholder={"Insira sua senha"}
        register={register("password")}
      >
        Senha:
      </Input>
      {errors.password && <p>{errors.password.message}</p>}
      <ButtonStyled type="submit">Logar</ButtonStyled>
      <Link to="register">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </Link>
    </FormStyled>
  );
}

export { LoginForm };
