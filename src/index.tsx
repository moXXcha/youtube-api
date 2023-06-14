import React from "react";
import ReactDOM from "react-dom/client";
import Api from "./components/Api";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Api />
  </React.StrictMode>
);
export {};
