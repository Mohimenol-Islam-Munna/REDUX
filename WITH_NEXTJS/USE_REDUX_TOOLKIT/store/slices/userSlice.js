import { createSlice } from "@reduxjs/toolkit";

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
      console.log("#### state ::", state);
      console.log("#### action ::", action);

      state.data = action.payload;
    },
  },
  exptraReducers: (builder) => {},
});

export const { fetchAllUser } = userSlice.actions;
export default userSlice.reducer;
