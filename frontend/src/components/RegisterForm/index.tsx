import { useForm } from "react-hook-form";
import { FiUser } from "react-icons/fi";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";

export const RegisterForm = () => {
  const { register } = useForm();
  return (
    <Container>
      <Input
        label="Usuário"
        icon={FiUser}
        name="username"
        placeholder="Digite seu username"
        register={register}
        width="20rem"
      />
      <Input
        label="E-mail"
        icon={FiUser}
        name="email"
        placeholder="Digite seu e-mail"
        register={register}
        width="20rem"
      />
      <Input
        label="Senha"
        icon={FiUser}
        name="password"
        placeholder="Digite uma senha"
        register={register}
        width="20rem"
      />
      <Button text="Cadastrar" />
    </Container>
  );
};
