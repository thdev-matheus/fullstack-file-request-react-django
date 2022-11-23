import { FiUser, FiLock, FiMail } from "react-icons/fi";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";
import { IFormData } from "../../globalTypes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import { IRegisterProps } from "./types";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const RegisterForm = ({ setIsRegister }: IRegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const onSubmitRegister = async (data: IFormData) => {
    try {
      delete data.confirmPassword;

      await api.post("users/", data);
      toast.success("Usuário cadastrado", { icon: "🦆🟢" });

      setIsRegister(false);
    } catch (error) {
      toast.error("Parece que houve algo de errado", {
        icon: "🦆🔴",
        autoClose: 3000,
      });
      setTimeout(() => {
        toast.error("Verifique os dados e tente novamente", {
          icon: "🦆🔴",
          autoClose: 3000,
        });
      }, 300);
    }
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
        icon={FiMail}
        error={errors.email?.message?.toString()}
        placeholder="Digite seu e-mail"
        {...register("email")}
        width="20rem"
      />
      <Input
        label="Senha"
        icon={FiLock}
        error={errors.password?.message?.toString()}
        placeholder="Digite uma senha"
        type="password"
        {...register("password")}
        width="20rem"
      />
      <Input
        label="Confirmação"
        icon={FiLock}
        error={errors.confirmPassword?.message?.toString()}
        placeholder="Confirme a senha"
        type="password"
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
