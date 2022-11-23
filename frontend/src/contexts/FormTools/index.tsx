import { createContext, useContext } from "react";
import { IFormToolsContext, IFormToolsProvider } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormToolsContext = createContext<IFormToolsContext>(
  {} as IFormToolsContext
);

export const useFormTools = () => {
  const context = useContext(FormToolsContext);

  return context;
};

export const FormToolsProvider = ({ children }: IFormToolsProvider) => {
  const {} = useForm({});

  return (
    <FormToolsContext.Provider value={{}}>{children}</FormToolsContext.Provider>
  );
};
