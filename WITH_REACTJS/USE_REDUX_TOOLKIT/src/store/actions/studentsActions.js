import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

// fetch all
export const fetchAllStudentsActionHandler = createAsyncThunk(
  "students/fetchAllStudents",
  async () => {
    const res = await axios.get(`${baseUrl}/api/users?page=2`);
    return res.data;
  }
);

// fetch one
export const fetchSingleStudentActionHandler = createAsyncThunk(
  "students/fetchSingleStudent",
  async (studentId) => {
    const res = await axios.get(`${baseUrl}/api/users/${studentId}`);
    return res.data;
  }
);

export const createStudentActionHandler = createAsyncThunk(
  "students/createStudnet",
  async (data) => {
    const res = await axios.post(`${baseUrl}/api/users`, data);
    return res.data;
  }
);

export const updateStudentActionHandler = createAsyncThunk(
  "students/updateStudent",
  async (data) => {
    const res = await axios.put(`${baseUrl}/api/users/${data.id}/`, data);
    return res.data;
  }
);

export const deleteStudentActionHandler = createAsyncThunk(
  "students/deleteStudent",
  async (id) => {
    const res = await axios.delete(`${baseUrl}/api/users/${id}/`);
    return res.data;
  }
);
