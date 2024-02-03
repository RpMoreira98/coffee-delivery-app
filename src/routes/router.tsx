import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Payment } from "../pages/payments/payment";
import { Confirmation } from "../pages/confirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);
