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

    // create
    createUserLoading: (state, { type, payload }) => {
      state.createUserLoading = payload;
    },

    createUserError: (state, { type, payload }) => {
      state.createUserError = payload;
    },

    createUserSuccess: (state, { type, payload }) => {
      console.log("create user success payload ::", payload);

      // state.users.data.data.push(payload.data);
      state.users.data.data = [...state.users.data.data, payload.data];
    },

    // update user
    updateUserLoading: (state, { type, payload }) => {
      state.updateUserLoading = payload;
    },

    updateUserError: (state, { type, payload }) => {
      state.updateUserError = payload;
    },

    updateUserSuccess: (state, { type, payload }) => {
      // use current mathod to print state in reducer action otherwise its print Proxy
      console.log("state ::", current(state));

      const copyState = state.users.data.data;

      let selectedIndex = copyState.findIndex((user) => user.id == payload.id);

      if (selectedIndex !== -1) {
        copyState[selectedIndex].email = "munna.cse.pust@gmail.com";
        copyState[selectedIndex].first_name = payload.data.name;
      }
    },

    // delete user
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

  createUserLoading,
  createUserError,
  createUserSuccess,

  updateUserLoading,
  updateUserError,
  updateUserSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
