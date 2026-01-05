import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* pomaga znalezc potencjalne problemy w aplikacji */}
    <App />
  </React.StrictMode> /* Pomaga znalezc potencjalne problemy w aplikacji */
);
