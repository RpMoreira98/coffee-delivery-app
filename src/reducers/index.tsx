import { CoffeeList } from "../types/CoffeeList";

type AddAction = {
  type: "add";
  payload: CartItem;
};

export type CartItem = Pick<CoffeeList, "id" | "image" | "value" | "text"> & {
  amount: number;
};

type RemoveAction = {
  type: "remove";
  payload: Pick<CoffeeList, "id">;
};

type ChatActions = AddAction | RemoveAction;

export const CartReducer = (state: CartItem[], action: ChatActions) => {
  switch (action.type) {
    case "add": {
      const existingIt = state.find((item) => item.id === action.payload.id);
      if (existingIt) {
        return state.map((item) =>
          item.id === existingIt.id
            ? { ...item, amount: item.amount + action.payload.amount }
            : item
        );
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            image: action.payload.image,
            value: action.payload.value,
            text: action.payload.text,
            amount: action.payload.amount,
          },
        ];
      }
    }

    case "remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
