import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

// create user
export const createEngineerAction = createAsyncThunk(
  `engineer/createEngineer`,
  async (data) => {
    const res = await axios.post(`${baseUrl}/api/users?page=2`, data);
    return res;
  }
);

// fetch all engineer
export const fetchAllEngineerAction = createAsyncThunk(
  `engineer/fetchAllEngineer`,
  async () => {
    const res = await axios.get(`${baseUrl}/api/users?page=2`);
    return res.data;
  }
);

// fetch engineer
export const fetchEngineerAction = createAsyncThunk(
  `engineer/fetchEngineer`,
  async (id) => {
    const res = await axios.get(`${baseUrl}/api/users/${id}`);
    return res;
  }
);

// update engineer
export const updateEngineerAction = createAsyncThunk(
  `engineer/updateEngineer`,
  async (data, id) => {
    const res = await axios.put(`${baseUrl}/api/users/${id}`, data);
    return res;
  }
);

// delete engineer
export const deleteEngineerAction = createAsyncThunk(
  `engineer/deleteEngineer`,
  async (id) => {
    const res = await axios.delete(`${baseUrl}/api/users/${id}`);
    return res;
  }
);
