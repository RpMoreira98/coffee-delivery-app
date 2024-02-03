import "./index.css";
import logo from "../../../../../public/icons/Logo.svg";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../contexts";

export const Header = () => {
  const cartCtx = useCart();
  const navigate = useNavigate();
  return (
    <header>
      <nav className="menu">
        <img src={logo} alt="" />
        <div className="button-header">
          <button className="point-locale">
            <FaMapMarkerAlt color="#8047F8" />
            Juazeiro do Norte, CE
          </button>
          <button className="car-shop" onClick={() => navigate("/payment")}>
            <FaShoppingCart color="#C47F17" />
            <div className="cart-ctx">{cartCtx?.cart.length}</div>
          </button>
        </div>
      </nav>
    </header>
  );
};
