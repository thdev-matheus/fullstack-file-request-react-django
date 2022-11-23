import { Container, BlackBox, WhiteBox } from "./styles";
import { RegisterForm } from "../../components/RegisterForm";
import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";

export const InitialPage = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <Container>
      <WhiteBox>
        <img src="https://i.ibb.co/7vvFXVs/Team-pana.png" alt="hello" />
      </WhiteBox>
      <BlackBox>
        {isRegister ? (
          <>
            <h1>Cadastro</h1>
            <RegisterForm />
            <p>
              Já tem cadastro? Faça{" "}
              <span onClick={() => setIsRegister(false)}>login</span>
            </p>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <LoginForm />
            <p>
              Não tem login? Faça seu{" "}
              <span onClick={() => setIsRegister(true)}>cadastro</span>
            </p>
          </>
        )}
      </BlackBox>
    </Container>
  );
};
