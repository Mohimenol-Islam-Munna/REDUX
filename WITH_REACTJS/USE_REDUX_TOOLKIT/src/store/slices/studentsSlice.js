import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "students",
  description: "This state is used for managing students data",

  fetchAllStudentsLoading,
  fetchSingleStudentLoading,

  createStudentLoading,
  updateStudentLoading,
  deleteStudentLoading,

  fetchAllStudentsError,
  fetchSingleStudentError,

  createStudentError,
  updateStudentError,
  deleteStudentError,

  students,
  student,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default studentsSlice.reducer;
