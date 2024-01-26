import { LuTimer } from "react-icons/lu";
import { List } from "../../home/components/list";
import "./index.css";
import { FaLocationDot } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";

export const CardConfirmation = () => {
  return (
    <div className="card-container">
      <div className="cardConfirmation">
        <List
          icon={<FaLocationDot color={"white"} />}
          color={"#8047F8"}
          text={`Entrega em ${"---"}`}
          text1={`${"----"}`}
        />
      </div>
      <div className="cardConfirmation">
        <List
          icon={<LuTimer color={"white"} />}
          color={"#DBAC2C"}
          text={"Previsão de entrega"}
          text1={"20 min - 30 min"}
        />
      </div>
      <div className="cardConfirmation">
        <List
          icon={<FiDollarSign color={"white"} />}
          color={"#C47F17"}
          text={"Pagamento na entrega"}
          text1={`${"---"}`}
        />
      </div>
    </div>
  );
};
