import { Dispatch, FormHTMLAttributes, SetStateAction } from "react";

export interface IFormFileProps extends FormHTMLAttributes<HTMLFormElement> {
  setFile: Dispatch<SetStateAction<File | undefined>>;
}
