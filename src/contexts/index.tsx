import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { CoffeeList } from "../types/CoffeeList";
import { CartReducer } from "../reducers";

type ChatContext = {
  cart: Pick<CoffeeList, "id" | "image" | "value" | "text">[];
  add: (id: number, text: string, image: string, value: number) => void;
};

export const CartContext = createContext<ChatContext | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispacth] = useReducer(CartReducer, []);
  const add = (id: number, text: string, image: string, value: number) => {
    dispacth({
      type: "add",
      payload: { id, text, image, value },
    });
  };
  const value = useMemo(() => ({ cart, add }), [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
