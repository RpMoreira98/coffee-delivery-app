import { Header } from "../home/components/header";
import logo from "../../../public/finished/finished.png";
import "./index.css";
import { CardConfirmation } from "./cardConfirmation";

export const Confirmation = () => {
  return (
    <>
      <Header />
      <main id="confirmation-menu" className="menu">
        <section className="section-card">
          <div className="set-card">
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>
          <div className="confirmation">
            <CardConfirmation />
          </div>
        </section>
        <section>
          <img src={logo} className="img-card" />
        </section>
      </main>
    </>
  );
};
