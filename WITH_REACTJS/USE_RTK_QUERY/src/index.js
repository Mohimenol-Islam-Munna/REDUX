import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import applicationApi from "./RTKQueryService.js/api/applicationApi";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApiProvider api={applicationApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

reportWebVitals();
