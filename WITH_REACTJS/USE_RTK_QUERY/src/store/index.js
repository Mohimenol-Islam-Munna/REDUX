import { configureStore } from "@reduxjs/toolkit";
import applicationApiSlice from "./features/api/apiSlice";

const store = configureStore({
  reducer: {
    [applicationApiSlice.reducerPath]: applicationApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicationApiSlice.middleware),
});

export default store;
