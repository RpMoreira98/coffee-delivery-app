import { ReactNode, createContext, useContext, useMemo, useState } from "react";
type FormData = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  payment: string;
};

type FormInitialData = {
  addText: FormData;
  setAddText: React.Dispatch<
    React.SetStateAction<{
      cep: string;
      rua: string;
      numero: string;
      complemento: string;
      bairro: string;
      cidade: string;
      uf: string;
      payment: string;
    }>
  >;
  isFormFilled: () => boolean;
};
export const FormContext = createContext<FormInitialData>(
  {} as FormInitialData
);

export const FormDataContext = ({ children }: { children: ReactNode }) => {
  const [addText, setAddText] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    payment: "",
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
