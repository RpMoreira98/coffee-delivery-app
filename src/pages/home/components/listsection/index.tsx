import { FaShoppingCart } from "react-icons/fa";
import { List } from "../list";
import "./index.css";
import { PiCoffeeFill, PiTimerFill } from "react-icons/pi";
import { BsBoxSeamFill } from "react-icons/bs";

export const Listsection = () => {
  return (
    <section>
      <div className="container-left">
        <div className="text-container">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe o seu café onde estiver, a
            qualquer hora
          </p>
        </div>
        <div className="list-container">
          <div className="item-1">
            <List
              icon={<FaShoppingCart color="white" />}
              color="#C47F17"
              text="Compra simples e segura"
            />
            <List
              icon={<PiTimerFill color="white" />}
              color="#DBAC2C"
              text="Entraga rápida e rastreada."
            />
          </div>
          <div className="item-2">
            <List
              icon={<BsBoxSeamFill color="white" />}
              color="#574F4D"
              text="Embalagem mantém o café intacto"
            />
            <List
              icon={<PiCoffeeFill color="white" />}
              color="#8047F8"
              text="O café chega fresquinho até você"
            />
          </div>
        </div>
      </div>
      <img src="./coffee-delivery.png" alt="" className="img-coffee" />
    </section>
  );
};
