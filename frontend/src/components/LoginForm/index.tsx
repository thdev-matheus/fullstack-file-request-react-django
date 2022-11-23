import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiUser } from "react-icons/fi";
import { IFormData } from "../../globalTypes";
import { loginSchema } from "../../schemas";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSubmitLogin = (data: IFormData) => {
    console.log(data);
    reset();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitLogin)}>
      <Input
        label="Usuário"
        icon={FiUser}
        error={errors.username?.message?.toString()}
        placeholder="Digite seu username"
        {...register("username")}
        width="20rem"
      />
      <Input
        label="Senha"
        icon={FiUser}
        error={errors.password?.message?.toString()}
        placeholder="Digite sua senha"
        {...register("password")}
        width="20rem"
      />
      <Button
        type="submit"
        text="Entrar"
        height="3.5rem"
        bgColor="var(--white)"
        color="var(--black)"
        hBgColor="var(--gray)"
      />
    </Container>
  );
};
