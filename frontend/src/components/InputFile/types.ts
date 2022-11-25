import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface IInputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  setFile: Dispatch<SetStateAction<File | undefined>>;
  text: string;
}
