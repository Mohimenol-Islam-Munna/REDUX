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

const engineerSlice = createSlice({
  name: "engineer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // HYDRATE
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.engineer,
      };
    });

    // create
    builder.addCase(createEngineerAction.pending, (state) => {
      state.createEngineerLoading = true;
    });

    builder.addCase(
      createEngineerAction.rejected,
      (state, { type, payload, error }) => {
        state.createEngineerError = error;
        state.createEngineerLoading = false;
      }
    );

    builder.addCase(
      createEngineerAction.fulfilled,
      (state, { type, payload, meta }) => {
        state.createEngineerError = null;
        state.createEngineerLoading = false;
        meta.arg.router.push("/");
      }
    );

    // fetch all
    builder.addCase(fetchAllEngineerAction.pending, (state) => {
      state.fetchAllEngineerLoading = true;
    });

    builder.addCase(
      fetchAllEngineerAction.rejected,
      (state, { type, payload, error }) => {
        state.fetchAllEngineerError = error;
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
      state.fetchEngineerLoading = true;
    });

    builder.addCase(
      fetchEngineerAction.rejected,
      (state, { type, payload, error }) => {
        state.fetchEngineerError = error;
        state.engineerData = null;
        state.fetchEngineerLoading = false;
      }
    );

    builder.addCase(
      fetchEngineerAction.fulfilled,
      (state, { type, payload }) => {
        state.fetchEngineerError = null;
        state.engineerData = payload.data;
        state.fetchEngineerLoading = false;
      }
    );

    // update
    builder.addCase(updateEngineerAction.pending, (state) => {
      state.updateEngineerLoading = true;
    });

    builder.addCase(
      updateEngineerAction.rejected,
      (state, { type, payload, error }) => {
        state.updateEngineerError = error;
        state.updateEngineerLoading = false;
      }
    );

    builder.addCase(
      updateEngineerAction.fulfilled,
      (state, { type, payload, meta }) => {
        state.updateEngineerError = null;
        state.updateEngineerLoading = false;
        meta.arg.router.push("/");
      }
    );

    // delete
    builder.addCase(deleteEngineerAction.pending, (state) => {
      state.deleteEngineerLoading = true;
    });

    builder.addCase(
      deleteEngineerAction.rejected,
      (state, { type, payload, error }) => {
        state.deleteEngineerError = error;
        state.deleteEngineerLoading = false;
      }
    );

    builder.addCase(
      deleteEngineerAction.fulfilled,
      (state, { type, payload, meta }) => {
        const othersEngineer = state.engineerList.filter(
          (engineer) => engineer.id !== meta.arg
        );
        state.engineerList = othersEngineer;
        state.deleteEngineerError = null;
        state.deleteEngineerLoading = false;
      }
    );
  },
});

export default engineerSlice;
