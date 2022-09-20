import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import studentsReducer from "./slices/studentsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    student: studentsReducer,
  },
});

export default store;
