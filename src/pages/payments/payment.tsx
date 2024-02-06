import { IoLocationOutline } from "react-icons/io5";
import { Header } from "../home/components/header";
import { Forms } from "./components/forms/forms";
import "./payment.css";
import { FiDollarSign } from "react-icons/fi";
import { MdPayment, MdPayments } from "react-icons/md";
import { Selected } from "./components/selecteds";
import { useForm } from "../../contexts/forms";
export enum PAYMENTS {
  DEBIT = "Debit",
  CREDIT = "Credit",
  CASH = "Money",
}

export const Payment = () => {
  const formCtx = useForm();
  const methodPayment = (payment: string) => {
    return payment === formCtx.addText.payment ? "select-payment" : "";
  };
  console.log(formCtx.addText);

  return (
    <>
      <Header />
      <main id="main-payment" className="menu">
        <section className="forms">
          <h3>Complete o seu pedido</h3>
          <div className="item-4">
            <h3>
              <IoLocationOutline
                color="#C47F17"
                style={{ width: "18px", height: "18px" }}
              />
              Endereço de Entrega
            </h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <Forms />
          </div>
          <div className="item-5">
            <h3>
              {" "}
              <FiDollarSign color="#8047F8" /> Pagamento
            </h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <div className="payments">
              <button
                onClick={() =>
                  formCtx.setAddText((prev) => ({
                    ...prev,
                    payment: PAYMENTS.CREDIT,
                  }))
                }
                className={`item-payment ${methodPayment(PAYMENTS.CREDIT)}`}
              >
                {" "}
                <MdPayment
                  color="#8047F8"
                  style={{ width: "16px", height: "16px" }}
                />
                Cartão de crédito
              </button>
              <button
                onClick={() =>
                  formCtx.setAddText((prev) => ({
                    ...prev,
                    payment: PAYMENTS.DEBIT,
                  }))
                }
                className={`item-payment ${methodPayment(PAYMENTS.DEBIT)}`}
              >
                {" "}
                <MdPayment
                  color="#8047F8"
                  style={{ width: "16px", height: "16px" }}
                />
                Cartão de Débito
              </button>
              <button
                onClick={() =>
                  formCtx.setAddText((prev) => ({
                    ...prev,
                    payment: PAYMENTS.CASH,
                  }))
                }
                className={`item-payment ${methodPayment(PAYMENTS.CASH)}`}
              >
                {" "}
                <MdPayments
                  color="#8047F8"
                  style={{ width: "16px", height: "16px" }}
                />
                Dinheiro
              </button>
            </div>
          </div>
        </section>
        <section className="item-6">
          <h3>Cafes Selecionados</h3>
          <Selected />
        </section>
      </main>
    </>
  );
};
