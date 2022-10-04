import { createSlice, current } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {
  createEngineerAction,
  fetchAllEngineerAction,
  fetchEngineerAction,
  updateEngineerAction,
  deleteEngineerAction,
} from "../actions/engineerActions";

const initialState = {
  createEngineerLoading: false,
  createEngineerError: null,

  fetchAllEngineerLoading: false,
  fetchAllEngineerError: null,

  fetchEngineerLoading: false,
  fetchEngineerError: null,

  updateEngineerLoading: false,
  updateEngineerError: null,

  deleteEngineerLoading: false,
  deleteEngineerError: null,

  engineerList: null,
  engineerData: null,
};

const userSlice = createSlice({
  name: "engineer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.engineer,
      };
    });

    // create
    builder.addCase(
      createEngineerAction.pending,
      (state, { type, payload }) => {
        console.log("create Engineer pending");
      }
    );

    builder.addCase(
      createEngineerAction.rejected,
      (state, { type, payload }) => {
        console.log("create Engineer rejected");
      }
    );

    builder.addCase(
      createEngineerAction.fulfilled,
      (state, { type, payload }) => {
        console.log("create Engineer fulfilled");
      }
    );

    // fetch all
    builder.addCase(fetchAllEngineerAction.pending, (state) => {
      state.fetchAllEngineerLoading = true;
    });

    builder.addCase(
      fetchAllEngineerAction.rejected,
      (state, { type, payload }) => {
        state.fetchAllEngineerError = payload;
        state.engineerList = null;
        state.fetchAllEngineerLoading = false;
      }
    );

    builder.addCase(
      fetchAllEngineerAction.fulfilled,
      (state, { type, payload }) => {
        state.engineerList = payload.data;
        state.fetchAllEngineerError = null;
        state.fetchAllEngineerLoading = false;
      }
    );

    // fetch single
    builder.addCase(fetchEngineerAction.pending, (state, { type, payload }) => {
      console.log("@@@@@ fetch Engineer pending 3");
      state.fetchEngineerLoading = true;
    });

    builder.addCase(
      fetchEngineerAction.rejected,
      (state, { type, payload }) => {
        console.log("fetch Engineer rejected");
        state.fetchEngineerError = payload;
        state.engineerData = null;
        state.fetchEngineerLoading = false;
      }
    );

    builder.addCase(
      fetchEngineerAction.fulfilled,
      (state, { type, payload }) => {
        console.log("@@@@@ fetch Engineer fulfilled 3::", payload);
        state.fetchEngineerError = null;
        state.engineerData = payload.data;
        state.fetchEngineerLoading = false;
      }
    );

    // update
    builder.addCase(
      updateEngineerAction.pending,
      (state, { type, payload }) => {
        console.log("update Engineer pending");
      }
    );

    builder.addCase(
      updateEngineerAction.rejected,
      (state, { type, payload }) => {
        console.log("update Engineer rejected");
      }
    );

    builder.addCase(
      updateEngineerAction.fulfilled,
      (state, { type, payload }) => {
        console.log("update Engineer fulfilled");
      }
    );

    // delete
    builder.addCase(
      deleteEngineerAction.pending,
      (state, { type, payload }) => {
        console.log("delete Engineer pending");
      }
    );

    builder.addCase(
      deleteEngineerAction.rejected,
      (state, { type, payload }) => {
        console.log("delete Engineer rejected");
      }
    );

    builder.addCase(
      deleteEngineerAction.fulfilled,
      (state, { type, payload }) => {
        console.log("delete Engineer fulfilled");
      }
    );
  },
});

export default userSlice;
