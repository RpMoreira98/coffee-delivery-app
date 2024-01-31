import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

import { CartItem, CartReducer } from "../reducers";

type ChatContext = {
  cart: CartItem[];
  add: (
    id: number,
    text: string,
    image: string,
    value: number,
    amount: number
  ) => void;
  remove: (id: number) => void;
};

export const CartContext = createContext<ChatContext | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispacth] = useReducer(CartReducer, []);
  const add = (
    id: number,
    text: string,
    image: string,
    value: number,
    amount: number
  ) => {
    dispacth({
      type: "add",
      payload: { id, text, image, value, amount },
    });
  };

  const removeCart = (id: number) => {
    dispacth({
      type: "remove",
      payload: { id },
    });
  };

  const value = useMemo(() => ({ cart, add, remove: removeCart }), [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
