import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "users",
  description: "Users Slice",

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

  usersList: null,
  user: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // fetch all
    fetchAllUserLoading: (state, { type, payload }) => {
      state.fetchAllUserLoading = payload.status;
    },

    fetchAllUserError: (state, { type, payload }) => {
      state.fetchAllUserError = {
        status: payload.status,
        message: payload.message,
      };
    },

    fetchAllUserSuccess: (state, { type, payload }) => {
      state.usersList = payload.data;
    },

    fetchOneUserLoading: (state) => {
      state.fetchOneUserLoading = true;
    },
    fetchOneUserError: (state, action) => {},
    fetchOneUserSuccess: (state, action) => {},

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
