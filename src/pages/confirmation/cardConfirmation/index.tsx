import { LuTimer } from "react-icons/lu";
import { List } from "../../home/components/list";
import "./index.css";
import { FaLocationDot } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { useForm } from "../../../contexts/forms";

export const CardConfirmation = () => {
  const formValue = useForm();
  return (
    <div className="card-container">
      <div className="cardConfirmation">
        <List
          icon={<FaLocationDot color={"white"} />}
          color={"#8047F8"}
          text={`Entrega em ${formValue?.addText.rua}`}
          text1={`Bairro: ${formValue?.addText.bairro}`}
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
