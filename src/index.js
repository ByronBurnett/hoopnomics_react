import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "../src/Context/UserContext";
import CartProvider from "../src/Context/CartContext";
import { BlogsContextProvider } from "../src/Context/BlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CartProvider>
        <BlogsContextProvider>
          <App />
        </BlogsContextProvider>
      </CartProvider>
    </UserContextProvider>
  </React.StrictMode>
);
