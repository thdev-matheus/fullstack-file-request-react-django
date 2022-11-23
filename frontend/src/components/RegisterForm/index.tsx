import { FiUser } from "react-icons/fi";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";
import { IFormData } from "../../globalTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const onSubmitRegister = (data: IFormData) => {
    console.log(data);
    reset();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitRegister)}>
      <Input
        label="Usuário"
        icon={FiUser}
        error={errors.username?.message?.toString()}
        placeholder="Digite seu username"
        {...register("username")}
        width="20rem"
      />
      <Input
        label="E-mail"
        icon={FiUser}
        error={errors.email?.message?.toString()}
        placeholder="Digite seu e-mail"
        {...register("email")}
        width="20rem"
      />
      <Input
        label="Senha"
        icon={FiUser}
        error={errors.password?.message?.toString()}
        placeholder="Digite uma senha"
        {...register("password")}
        width="20rem"
      />
      <Input
        label="Confirmação"
        icon={FiUser}
        error={errors.confirmPassword?.message?.toString()}
        placeholder="Confirme a senha"
        {...register("confirmPassword")}
        width="20rem"
      />
      <Button
        type="submit"
        text="Cadastrar"
        height="3.5rem"
        bgColor="var(--white)"
        color="var(--black)"
        hBgColor="var(--gray)"
      />
    </Container>
  );
};
