import { createSlice, current } from "@reduxjs/toolkit";
import {
  fetchAllStudentsActionHandler,
  fetchSingleStudentActionHandler,
  createStudentActionHandler,
  updateStudentActionHandler,
  deleteStudentActionHandler,
} from "../actions/studentsActions";

const initialState = {
  name: "students",
  description: "This state is used for managing students data",

  fetchAllStudentsLoading: false,
  fetchSingleStudentLoading: false,

  createStudentLoading: false,
  updateStudentLoading: false,
  deleteStudentLoading: false,

  fetchAllStudentsError: null,
  fetchSingleStudentError: null,

  createStudentError: null,
  updateStudentError: null,
  deleteStudentError: null,

  students: null,
  student: null,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch all
    builder.addCase(fetchAllStudentsActionHandler.pending, (state, action) => {
      state.fetchAllStudentsLoading = true;
    });

    builder.addCase(
      fetchAllStudentsActionHandler.rejected,
      (state, { type, error }) => {
        state.fetchAllStudentsError = error;
        state.fetchAllStudentsLoading = false;
        state.students = null;
      }
    );

    builder.addCase(
      fetchAllStudentsActionHandler.fulfilled,
      (state, { type, payload }) => {
        state.students = payload.data;
        state.fetchAllStudentsError = null;
        state.fetchAllStudentsLoading = false;
      }
    );

    // fetch one
    builder.addCase(
      fetchSingleStudentActionHandler.pending,
      (state, action) => {
        state.fetchSingleStudentLoading = true;
      }
    );

    builder.addCase(
      fetchSingleStudentActionHandler.rejected,
      (state, { type, error }) => {
        state.fetchSingleStudentError = error;
        state.student = null;
        state.fetchSingleStudentLoading = false;
      }
    );

    builder.addCase(
      fetchSingleStudentActionHandler.fulfilled,
      (state, { type, payload }) => {
        state.fetchSingleStudentError = null;
        state.student = payload.data;
        state.fetchSingleStudentLoading = false;
      }
    );

    // create
    builder.addCase(createStudentActionHandler.pending, (state, action) => {
      state.createStudentLoading = true;
    });

    builder.addCase(
      createStudentActionHandler.rejected,
      (state, { type, error }) => {
        state.createStudentError = error;
        state.createStudentLoading = false;
      }
    );

    builder.addCase(
      createStudentActionHandler.fulfilled,
      (state, { type, payload, meta }) => {
        // meta contains user inputed data. when need user inputed data then use from meta
        state.createStudentError = null;
        state.students = [...state.students, payload];
        state.createStudentLoading = false;
      }
    );

    // update
    builder.addCase(updateStudentActionHandler.pending, (state) => {
      state.updateStudentLoading = true;
    });

    builder.addCase(
      updateStudentActionHandler.rejected,
      (state, { type, error }) => {
        state.updateStudentError = error;
        state.updateStudentLoading = false;
      }
    );

    builder.addCase(
      updateStudentActionHandler.fulfilled,
      (state, { type, payload, meta }) => {
        const selectedIndex = state.students.findIndex(
          (student) => student.id === meta.arg.id
        );

        if (selectedIndex !== -1) {
          state.students[selectedIndex].first_name = meta.arg.name;
          state.students[selectedIndex].email = "mohimenolmunna@gmail.com";
        }

        state.updateStudentError = null;
        state.updateStudentLoading = false;
      }
    );

    // delete 
    builder.addCase(deleteStudentActionHandler.pending, (state) => {
      state.deleteStudentLoading = true;
    });

    builder.addCase(
      deleteStudentActionHandler.rejected,
      (state, { type, error }) => {
        state.deleteStudentLoading = false;
        state.deleteStudentError = error;
      }
    );

    builder.addCase(
      deleteStudentActionHandler.fulfilled,
      (state, { type, payload, meta }) => {
        const othersStudents = state.students.filter(
          (student) => student.id !== meta.arg
        );

        state.students = othersStudents;
      }
    );
  },
});

export default studentsSlice.reducer;
