import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./slices/userSlice";
import taksReducer from "./slices/tasksSlice";

const store = () =>
  configureStore({
    reducer: {
      user: userReducer.reducer,
      tasks: taksReducer,
    },
    devTools: true,
  });

const storeWrapper = createWrapper(store);
export default storeWrapper;
