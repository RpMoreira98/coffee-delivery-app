import { CoffeeList } from "../types/CoffeeList";

type AddAction = {
  type: "add";
  payload: Pick<CoffeeList, "id" | "image" | "value" | "text">;
};

type RemoveAction = {
  type: "remove";
  payload: Pick<CoffeeList, "id">;
};

type ChatActions = AddAction | RemoveAction;

export const CartReducer = (
  state: Pick<CoffeeList, "id" | "image" | "value" | "text">[],
  action: ChatActions
) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          image: action.payload.image,
          value: action.payload.value,
          text: action.payload.text,
        },
      ];
    case "remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};
