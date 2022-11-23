import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

export const Button = ({
  text,
  width,
  height,
  type = "button",
  borderRadius,
  bgColor,
  color,
  padding,
  ...rest
}: IButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      borderRadius={borderRadius}
      bgColor={bgColor}
      color={color}
      padding={padding}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};
