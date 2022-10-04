import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import engineerReducer from "./slices/engineerSlice";

const store = () =>
  configureStore({
    reducer: {
      [engineerReducer.name]: engineerReducer.reducer,
    },
    devTools: true,
  });

const storeWrapper = createWrapper(store);
export default storeWrapper;
