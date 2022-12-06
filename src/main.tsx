import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import { FinanceiroContextProvider } from "./context/financeiroContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FinanceiroContextProvider>
      <GlobalStyles />
      <App />
    </FinanceiroContextProvider>
  </React.StrictMode>
);
