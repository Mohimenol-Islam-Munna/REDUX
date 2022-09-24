import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import applicationApi from "./service/applicationApi";

const store = configureStore({
  reducer: {
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  midddleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat(applicationApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
