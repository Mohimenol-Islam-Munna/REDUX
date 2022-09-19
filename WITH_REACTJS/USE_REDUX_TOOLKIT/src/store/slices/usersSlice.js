import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "users",
  description: "Users State",

  fetchAllUserLoading: false,
  fetchOneUserLoading: false,

  createUserLoading: false,
  updateUserLoading: false,
  deleteUserLoading: false,

  fetchAllUserError: null,
  fetchOneUserError: null,

  createUserError: null,
  updateUserError: null,
  deleteUserError: null,

  users: null,
  user: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // fetch all
    fetchAllUserLoading: (state, { type, payload }) => {
      state.fetchAllUserLoading = payload;
    },

    fetchAllUserError: (state, { type, payload }) => {
      state.fetchAllUserError = payload;
    },

    fetchAllUserSuccess: (state, { type, payload }) => {
      state.users = payload;
    },

    // fetch one
    fetchOneUserLoading: (state, { type, payload }) => {
      state.fetchOneUserLoading = payload;
    },

    fetchOneUserError: (state, { type, payload }) => {
      state.fetchOneUserError = payload;
    },

    fetchOneUserSuccess: (state, { type, payload }) => {
      state.user = payload;
    },

    createUserLoading: (state) => {
      state.createUserLoading = true;
    },
    createUserError: (state, action) => {},
    createUserSuccess: (state, action) => {},

    updateUserLoading: (state) => {
      state.updateUserLoading = true;
    },
    updateUserError: (state, action) => {},
    updateUserSuccess: (state, action) => {},

    deleteUserLoading: (state) => {
      state.deleteUserLoading = true;
    },
    deleteUserError: (state, action) => {},
    deleteUserSuccess: (state, action) => {},
  },
  extraReducers: (builder) => {},
});

export const {
  fetchAllUserLoading,
  fetchAllUserError,
  fetchAllUserSuccess,

  fetchOneUserError,
  fetchOneUserSuccess,
  fetchOneUserLoading,
} = usersSlice.actions;

export default usersSlice.reducer;
