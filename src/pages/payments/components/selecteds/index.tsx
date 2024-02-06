import { useCart } from "../../../../contexts";
import { useForm } from "../../../../contexts/forms";
import { SelectCard } from "../selectCard";
import "./index.css";
import { useNavigate } from "react-router-dom";
export const Selected = () => {
  const cartCtx = useCart();
  const navigate = useNavigate();
  const formCtx = useForm();
  const totalAmount = cartCtx?.cart.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const handleConfirmation = () => {
    if (formCtx?.isFormFilled()) {
      navigate("/confirmation");
    } else {
      alert("Por favor, preencha todos os campos antes de confirmar o pedido.");
    }
  };

  const delivery = 3.5;

  const totalValue =
    delivery +
    (cartCtx?.cart.reduce((acc, curr) => {
      return acc + curr.value * curr.amount;
    }, 0) ?? 0);

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
          <span>{totalAmount}</span>
        </div>
        <div className="item-selected">
          <p>Entrega</p>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(delivery as number)}
          </span>
        </div>
        <div className="item-selected">
          <p>Total</p>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(totalValue as number)}
          </span>
        </div>
      </div>
      <div className="confirmation">
        <button type="submit" onClick={handleConfirmation}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};
