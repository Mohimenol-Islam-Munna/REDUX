import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./slices/userSlice";

const store = () =>
  configureStore({
    reducer: {
      users: userReducer,
    },
  });

const storeWrapper = createWrapper(store);
export default storeWrapper;
