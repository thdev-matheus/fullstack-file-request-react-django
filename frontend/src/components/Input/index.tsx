import { IInputProps } from "./types";
import { Container, InputContainer } from "./styles";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      label,
      icon: Icon,
      error,
      width,
      bgColor,
      borderColor,
      borderRadius,
      color,
      ...rest
    },
    ref
  ) => {
    return (
      <Container width={width} bgColor={bgColor} color={color}>
        <div>
          {label} {!!error && <span> - {error}</span>}
        </div>
        <InputContainer
          isErrored={!!error}
          borderColor={borderColor}
          borderRadius={borderRadius}
          color={color}
        >
          {Icon && <Icon />}
          <input {...rest} ref={ref} />
        </InputContainer>
      </Container>
    );
  }
);
