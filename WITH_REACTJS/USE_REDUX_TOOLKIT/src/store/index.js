import { configureStore, compose } from "@reduxjs/toolkit";

// import reducers
import usersSlice from "./slices/usersSlice";

const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
  composeEnhencer,
});

export default store;
