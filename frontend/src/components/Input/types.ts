import { FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

export interface IInputProps {
  label: string;
  icon?: IconType;
  name: string;
  error?: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<FieldValues>;

  width?: string;

  borderRadius?: string;

  borderColor?: string;
  bgColor?: string;
  color?: string;
}

export interface ISInputProps {
  isErrored?: boolean;

  width?: string;

  borderRadius?: string;

  borderColor?: string;
  bgColor?: string;
  color?: string;
}
