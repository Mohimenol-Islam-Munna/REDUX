import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import EngineerReducer from "./slices/engineerSlice";

const store = () =>
  configureStore({
    reducer: {
      [EngineerReducer.name]: EngineerReducer.reducer,
    },
  });

const storeWrapper = createWrapper(store);
export default storeWrapper;
