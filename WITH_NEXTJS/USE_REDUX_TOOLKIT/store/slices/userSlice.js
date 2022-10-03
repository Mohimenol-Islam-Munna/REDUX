import { createSlice, current } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchAllUser: (state, action) => {
      console.log("action ::", action.payload);
      console.log("state ::", current(state));
      state.data = action.payload;
      state.loading = true;
    },
  },
  exptraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("@HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { fetchAllUser } = userSlice.actions;
export default userSlice;
