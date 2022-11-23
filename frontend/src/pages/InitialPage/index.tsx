import { Container, BlackBox, WhiteBox } from "./styles";
import { RegisterForm } from "../../components/RegisterForm";

export const InitialPage = () => {
  return (
    <Container>
      <WhiteBox>
        <img src="https://i.ibb.co/7vvFXVs/Team-pana.png" alt="hello" />
      </WhiteBox>
      <BlackBox>
        <RegisterForm />
      </BlackBox>
    </Container>
  );
};
