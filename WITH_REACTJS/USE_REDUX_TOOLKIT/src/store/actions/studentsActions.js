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
    console.log("studentId ::", studentId);

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
