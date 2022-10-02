import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  data: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchAllUsers: (state, { type, payload }) => {
      state.data = payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const { fetchAllUsers } = userSlice.actions;
export default userSlice.reducer;
