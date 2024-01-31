import { useCart } from "../../../../contexts";
import { SelectCard } from "../selectCard";
import "./index.css";
import { useNavigate } from "react-router-dom";
export const Selected = () => {
  const cartCtx = useCart();
  const navigate = useNavigate();
  return (
    <div className="flex-1">
      <div className="container-down">
        {cartCtx?.cart.map((item) => {
          return (
            <SelectCard
              amount={item.amount}
              image={item.image}
              text={item.text}
              value={item.value}
              key={item.id}
              id={item.id}
            />
          );
        })}
        <div className="item-selected">
          <p>Total de itens</p>
          <span>--</span>
        </div>
        <div className="item-selected">
          <p>Entrega</p>
          <span>--</span>
        </div>
        <div className="item-selected">
          <p>Total</p>
          <span>--</span>
        </div>
      </div>
      <div className="confirmation">
        <button onClick={() => navigate("/confirmation")}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};
