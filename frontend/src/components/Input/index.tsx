import { IInputProps } from "./types";
import { Container, InputContainer } from "./styles";

export const Input = ({
  label,
  icon: Icon,
  name,
  error,
  placeholder,
  register,
  width,
  bgColor,
  borderColor,
  borderRadius,
  color,
  ...rest
}: IInputProps) => {
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
        <input {...register(name)} placeholder={placeholder} {...rest} />
      </InputContainer>
    </Container>
  );
};
