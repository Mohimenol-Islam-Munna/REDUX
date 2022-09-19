import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "USERS_SLICE",
  description: "User description",
  age: 0,
  data: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.data = action.payload;
    },

    incrementAge: (state) => {
      state.age += 1;
    },

    incrementAgeByPayLoad: (state, action) => {
      console.log("action in incrementAgeByPayLoad reducer : ", action);
      state.age += action.payload;
    },
  },
});

export const { getAllUsers, incrementAge, incrementAgeByPayLoad } =
  usersSlice.actions;
export default usersSlice.reducer;
