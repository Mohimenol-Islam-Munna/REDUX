import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

// create user
export const createEngineerAction = createAsyncThunk(
  `engineer/createEngineer`,
  async (data) => {
    const res = await axios.post(`${baseUrl}/api/users/`, data.data);
    return res.data;
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
    return res.data;
  }
);

// update engineer
export const updateEngineerAction = createAsyncThunk(
  `engineer/updateEngineer`,
  async (data) => {
    const res = await axios.put(
      `${baseUrl}/api/users/${data.engineerId}`,
      data.data
    );
    return res.data;
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
