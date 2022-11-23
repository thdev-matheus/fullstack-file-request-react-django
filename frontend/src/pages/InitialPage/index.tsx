import { Container, BlackBox, WhiteBox } from "./styles";
import { RegisterForm } from "../../components/RegisterForm";
import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export const InitialPage = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <Container>
      <WhiteBox>
        <img src="https://i.ibb.co/7vvFXVs/Team-pana.png" alt="hello" />
      </WhiteBox>
      <BlackBox>
        <AnimatePresence custom="wait">
          <MotionConfig transition={{ duration: 0.8 }}>
            {isRegister ? (
              <motion.div
                key="register"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <h1>Cadastro</h1>
                <RegisterForm setIsRegister={setIsRegister} />
                <p>
                  Já tem cadastro? Faça
                  <span onClick={() => setIsRegister(false)}> login</span>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="login"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
              >
                <h1>Login</h1>
                <LoginForm />
                <p>
                  Não tem login? Faça seu
                  <span onClick={() => setIsRegister(true)}> cadastro</span>
                </p>
              </motion.div>
            )}
          </MotionConfig>
        </AnimatePresence>
      </BlackBox>
    </Container>
  );
};
