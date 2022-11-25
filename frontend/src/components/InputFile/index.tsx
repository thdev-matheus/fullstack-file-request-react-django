import { forwardRef, useState } from "react";
import { Container, InputFake } from "./styles";
import { IInputFileProps } from "./types";

export const InputFile = forwardRef<HTMLInputElement, IInputFileProps>(
  ({ setFile, text }, ref) => {
    const [label, setLabel] = useState<string>("Nenhum arquivo carregado");
    return (
      <Container>
        <input
          accept=".txt"
          type="file"
          name="file"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
              setLabel(e.target.files[0].name);
            }
          }}
        />
        <InputFake>{text}</InputFake>
        <span>{label}</span>
      </Container>
    );
  }
);
