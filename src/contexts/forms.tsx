import { ReactNode, createContext, useContext, useMemo, useState } from "react";
type FormData = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

type FormInitialData = {
  addText: FormData;
  setAddText: (n: FormData) => void;
  isFormFilled: () => boolean;
};
export const FormContext = createContext<FormInitialData | null>(null);

export const FormDataContext = ({ children }: { children: ReactNode }) => {
  const [addText, setAddText] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const isFormFilled = () => {
    return Object.values(addText).every((value) => value.trim() !== "");
  };

  const value = useMemo(
    () => ({ addText, setAddText, isFormFilled }),
    [addText]
  );
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => useContext(FormContext);
