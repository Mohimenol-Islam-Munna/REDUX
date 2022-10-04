import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import engineerReducer from "../slices/engineerSlice";

// create user
export const createEngineerAction = createAsyncThunk(
  `${engineerReducer.name}/createEngineer`,
  async (data) => {
    const res = await axios.post(`${baseUrl}/api/users?page=2`, data);
    return res;
  }
);

// fetch all engineer
export const fetchAllEngineerAction = createAsyncThunk(
  `${engineerReducer.name}/fetchAllEngineer`,
  async () => {
    const res = await axios.get(`${baseUrl}/api/users?page=2`);
    return res;
  }
);

// fetch engineer
export const fetchEngineerAction = createAsyncThunk(
  `${engineerReducer.name}/fetchEngineer`,
  async (id) => {
    const res = await axios.get(`${baseUrl}/api/users/${id}`);
    return res;
  }
);

// update engineer
export const updateEngineerAction = createAsyncThunk(
  `${engineerReducer.name}/updateEngineer`,
  async (data, id) => {
    const res = await axios.put(`${baseUrl}/api/users/${id}`, data);
    return res;
  }
);

// delete engineer
export const deleteEngineerAction = createAsyncThunk(
  `${engineerReducer.name}/deleteEngineer`,
  async (id) => {
    const res = await axios.delete(`${baseUrl}/api/users/${id}`);
    return res;
  }
);
