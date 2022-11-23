import { FormToolsProvider } from "./FormTools";
import { IContextProps } from "./types";

export const Context = ({ children }: IContextProps) => {
  return <FormToolsProvider>{children}</FormToolsProvider>;
};
