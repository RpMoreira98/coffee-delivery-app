import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { CartProvider } from "./contexts/index.tsx";
import { FormDataContext } from "./contexts/forms.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <FormDataContext>
        <RouterProvider router={router} />
      </FormDataContext>
    </CartProvider>
  </React.StrictMode>
);
