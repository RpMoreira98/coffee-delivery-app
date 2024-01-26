import { FaRegTrashAlt } from "react-icons/fa";
import logo from "../../../../../public/coffees/1.png";
import { useState } from "react";
import "./index.css";

export const SelectCard = () => {
  const [value, setValue] = useState(0);
  const buttonHandlePlus = () => {
    setValue(value + 1);
  };

  const buttonHandleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="selected">
      <div className="rivaldo">
        <img src={logo} />
        <div className="selections">
          <p>--</p>
          <div className="button-select">
            <div className="button-left">
              <button onClick={buttonHandleMinus}>-</button>
              <span>{value}</span>
              <button onClick={buttonHandlePlus}>+</button>
            </div>
            <button className="button-selected">
              <FaRegTrashAlt color="#8047F8" />
              Remover
            </button>
          </div>
        </div>
      </div>
      <p className="price">--</p>
    </div>
  );
};
