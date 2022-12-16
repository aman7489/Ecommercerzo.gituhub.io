import React from "react";
import ReactDom from "react-dom"
import App from "./App";
import { AppProvider } from "./Context/ProductContext"
import { createRoot } from 'react-dom/client';
import { FilterContextProvider } from "./reducer/Filter_context";
import { CartProvider } from "./Context/CardContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
        <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider> */
  </>
)