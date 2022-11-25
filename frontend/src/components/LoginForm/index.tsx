import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FiUser, FiLock } from "react-icons/fi";
import { IFormData } from "../../globalTypes";
import { loginSchema } from "../../schemas";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(loginSchema),
  });

  const onSubmitLogin = async (data: IFormData) => {
    try {
      const response = await api.post("login/", data);

      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("username", response.data.user.username);
      toast.success("Sucesso!", { icon: "🦆🟢", autoClose: 3000 });
      setTimeout(() => {
        toast.success(
          `Seja bem-vindo(a) ao File Request, ${response.data.user.username}!`,
          {
            icon: "🦆🟢",
            autoClose: 3000,
          }
        );
      }, 500);

      navigate("/dashboard");
    } catch (error) {
      toast.error("Parece que houve um problema...", { icon: "🦆🔴" });
      setTimeout(() => {
        toast.error("Tente novamente!", { icon: "🦆🔴" });
      }, 500);
      reset();
    }
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
        icon={FiLock}
        error={errors.password?.message?.toString()}
        placeholder="Digite sua senha"
        type="password"
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
