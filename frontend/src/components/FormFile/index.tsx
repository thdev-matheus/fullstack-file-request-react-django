import { forwardRef } from "react";
import { Button } from "../Button";
import { InputFile } from "../InputFile";
import { Container } from "./styles";
import { IFormFileProps } from "./types";

export const FormFile = forwardRef<HTMLFormElement, IFormFileProps>(
  ({ setFile, ...rest }, ref) => {
    return (
      <Container {...rest} ref={ref}>
        <InputFile setFile={setFile} text="Carregar arquivo" />
        <Button
          type="submit"
          text="Enviar"
          height="2.5rem"
          bgColor="var(--white)"
          color="var(--black)"
          hBgColor="var(--gray)"
        />
      </Container>
    );
  }
);
