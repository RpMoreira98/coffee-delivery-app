import { CoffeeList } from "../../../../types/CoffeeList";
import { CardCoffee } from "../cardCoffee";
import "./index.css";

type Props = {
  coffee: CoffeeList[];
};

export const CoffeList = ({ coffee }: Props) => {
  return (
    <main>
      <h1>Nossos Cafés</h1>
      <div className="container-coffee">
        {coffee.map((item) => (
          <CardCoffee coffee={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
