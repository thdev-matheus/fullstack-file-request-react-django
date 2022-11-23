import { forwardRef } from "react";
import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

export const Button = forwardRef<HTMLInputElement, IButtonProps>(
  (
    { text, width, height, borderRadius, bgColor, color, padding, ...rest },
    ref
  ) => {
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
  }
);
