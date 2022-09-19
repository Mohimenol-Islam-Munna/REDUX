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

  usersList: [],
  user: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchAllUserLoading: (state, action) => {},
    fetchAllUserError: (state, action) => {},
    fetchAllUserSuccess: (state, action) => {},

    fetchOneUserLoading: (state, action) => {},
    fetchOneUserError: (state, action) => {},
    fetchOneUserSuccess: (state, action) => {},

    createUserLoading: (state, action) => {},
    createUserError: (state, action) => {},
    createUserSuccess: (state, action) => {},

    updateUserLoading: (state, action) => {},
    updateUserError: (state, action) => {},
    updateUserSuccess: (state, action) => {},

    deleteUserLoading: (state, action) => {},
    deleteUserError: (state, action) => {},
    deleteUserSuccess: (state, action) => {},
  },
  extraReducers: (builder) => {},
});
