import { FaRegTrashAlt } from "react-icons/fa";
import "./index.css";
import { useCart } from "../../../../contexts";

type CartProps = {
  image: string;
  text: string;
  value: number;
  amount: number;
  id: number;
};

export const SelectCard = (props: CartProps) => {
  const cartCtx = useCart();
  const buttonHandlePlus = () => {
    if (cartCtx) {
      cartCtx?.add(props.id, props.text, props.image, props.value, 1);
    }
  };

  const buttonHandleMinus = () => {
    if (props.amount > 1) {
      cartCtx?.add(props.id, props.text, props.image, props.value, -1);
    }
  };

  const buttonRemove = () => {
    cartCtx?.remove(props.id);
  };

  return (
    <div className="selected">
      <div className="rivaldo">
        <img src={props.image} />
        <div className="selections">
          <p>{props.text}</p>
          <div className="button-select">
            <div className="button-left">
              <button onClick={buttonHandleMinus}>-</button>
              <span>{props.amount}</span>
              <button onClick={buttonHandlePlus}>+</button>
            </div>
            <button className="button-selected" onClick={buttonRemove}>
              <FaRegTrashAlt color="#8047F8" />
              Remover
            </button>
          </div>
        </div>
      </div>
      <p className="price">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.value)}
      </p>
    </div>
  );
};
