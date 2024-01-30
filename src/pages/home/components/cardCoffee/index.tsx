import { FaShoppingCart } from "react-icons/fa";
import { CoffeeList } from "../../../../types/CoffeeList";
import "./index.css";
import { useState } from "react";
import { useCart } from "../../../../contexts";

type cardCoffeeProps = {
  coffee: CoffeeList;
};

export const CardCoffee = ({ coffee }: cardCoffeeProps) => {
  const [value, setValue] = useState<number>(1);
  const cartCtx = useCart();

  const handleAdd = () => {
    cartCtx?.add(coffee.id, coffee.text, coffee.image, coffee.value);
  };

  const handleMinus = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handlePlus = () => {
    setValue(value + 1);
  };

  return (
    <div className="container">
      <img src={coffee.image} alt="" />
      <div className="text-information">
        <div className="type-coffee">
          <span>{coffee.type}</span>
          {coffee.type2 && <span>{coffee.type2}</span>}
          {coffee.type3 && <span>{coffee.type3}</span>}
        </div>
        <div className="item-text">
          <h2>{coffee.title}</h2>
          <p>{coffee.text}</p>
        </div>
        <div className="value-shop">
          <p>
            <span>R$</span>
            {`${coffee.value.toFixed(2)}`}
          </p>
          <div className="button-card">
            <div className="button1">
              <span onClick={handleMinus}>-</span>
              <div>{value}</div>
              <span onClick={handlePlus}>+</span>
            </div>
            <button className="button2" onClick={handleAdd}>
              <FaShoppingCart color="#FFF" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
