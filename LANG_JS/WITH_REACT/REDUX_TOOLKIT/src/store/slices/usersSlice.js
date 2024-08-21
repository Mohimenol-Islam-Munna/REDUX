import { createSlice, current } from "@reduxjs/toolkit";

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
      state.users = null;
    },

    fetchAllUserSuccess: (state, { type, payload }) => {
      state.users = payload;
      state.fetchAllUserError = null;
    },

    // fetch one
    fetchOneUserLoading: (state, { type, payload }) => {
      state.fetchOneUserLoading = payload;
    },

    fetchOneUserError: (state, { type, payload }) => {
      state.fetchOneUserError = payload;
      state.user = null;
    },

    fetchOneUserSuccess: (state, { type, payload }) => {
      state.user = payload;
      state.fetchOneUserError = null;
    },

    // create
    createUserLoading: (state, { type, payload }) => {
      state.createUserLoading = payload;
    },

    createUserError: (state, { type, payload }) => {
      state.createUserError = payload;
    },

    createUserSuccess: (state, { type, payload }) => {
      // state.users.data.data.push(payload.data);
      state.users.data.data = [...state.users.data.data, payload.data];
      state.createUserError = null;
    },

    // update user
    updateUserLoading: (state, { type, payload }) => {
      state.updateUserLoading = payload;
    },

    updateUserError: (state, { type, payload }) => {
      state.updateUserError = payload;
    },

    updateUserSuccess: (state, { type, payload }) => {
      // use current() mathod to print state in reducer action otherwise its print Proxy
      // console.log("state ::", current(state));

      const newState = [...state.users.data.data];
      let selectedIndex = newState.findIndex((user) => user.id == payload.id);

      if (selectedIndex !== -1) {
        newState[selectedIndex].email = "munna33.cse.pust@gmail.com";
        newState[selectedIndex].first_name = payload.data.name;
        state.users.data.data = newState;
        state.updateUserError = null;
      }
    },

    // delete user
    deleteUserLoading: (state, { type, payload }) => {
      state.deleteUserLoading = payload;
    },

    deleteUserError: (state, { type, payload }) => {
      state.deleteUserError = payload;
    },

    deleteUserSuccess: (state, { type, payload }) => {
      let othersUser = state.users.data.data.filter(
        (user) => user.id !== payload.id
      );

      state.users.data.data = othersUser;
      state.deleteUserError = null;
    },
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

  createUserLoading,
  createUserError,
  createUserSuccess,

  updateUserLoading,
  updateUserError,
  updateUserSuccess,

  deleteUserLoading,
  deleteUserError,
  deleteUserSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
