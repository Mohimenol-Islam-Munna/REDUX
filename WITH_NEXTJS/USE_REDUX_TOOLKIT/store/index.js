import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const store = () =>
  configureStore({
    reducer: reducer,
  });

const storeWrapper = createWrapper(store);

export default storeWrapper;
