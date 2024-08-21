import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { createWrapper } from "next-redux-wrapper";
import applicationApi from "../api/applicationApi";

const store = () =>
  configureStore({
    reducer: {
      [applicationApi.reducerPath]: applicationApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(applicationApi.middleware),
    devTools: true,
  });

// setupListeners(store.dispatch);  it's through error in next js

const storeWrapper = createWrapper(store);
export default storeWrapper;
