import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";

// Read Tasks
export const readTasks = createAsyncThunk("tasks/readTasks", async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/users?page=2`);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    task2: [],
    loading: null,
    success: null,
    message: null,
  },
  reducers: {
    getTasks: (state, { payload }) => {
      state.task2 = payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload.tasks,
      };
    },
    [readTasks.pending]: (state) => {
      state.loading = true;
    },
    [readTasks.fulfilled]: (state, { payload }) => {
      console.log("payload ::", payload);

      state.loading = false;
      state.tasks = payload.data;
      state.success = true;
    },
    [readTasks.rejected]: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
  },
});

export const {getTasks} = tasksSlice.actions;
export default tasksSlice.reducer;
