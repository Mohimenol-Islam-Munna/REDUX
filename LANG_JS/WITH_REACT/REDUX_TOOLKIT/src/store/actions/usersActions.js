import axios from "axios";
import baseUrl from "../../utils/baseUrl";

import {
  fetchAllUserLoading,
  fetchAllUserError,
  fetchAllUserSuccess,
  fetchOneUserLoading,
  fetchOneUserError,
  fetchOneUserSuccess,
  createUserLoading,
  createUserError,
  createUserSuccess,
  updateUserLoading,
  updateUserError,
  updateUserSuccess,
  deleteUserLoading,
  deleteUserError,
  deleteUserSuccess,
} from "../slices/usersSlice";

// fetch all
export const fetchAllUserActionHandler = () => async (dispatch) => {
  dispatch(fetchAllUserLoading(true));

  try {
    const res = await axios.get(`${baseUrl}/api/users?page=2`);
    dispatch(fetchAllUserSuccess({ data: res.data }));
  } catch (err) {
    dispatch(fetchAllUserError({ status: true, message: err }));
  }

  dispatch(fetchAllUserLoading(false));
};

// fetch one
export const fetchOneUserActionHandler = (userId) => async (dispatch) => {
  dispatch(fetchOneUserLoading(true));

  try {
    const res = await axios.get(`${baseUrl}/api/users/${userId}`);
    dispatch(fetchOneUserSuccess({ data: res.data }));
  } catch (err) {
    dispatch(fetchOneUserError({ status: true, message: err }));
  }

  dispatch(fetchOneUserLoading(false));
};

// create
export const createUserActionHandler = (data) => async (dispatch) => {
  dispatch(createUserLoading(true));

  try {
    const res = await axios.post(`${baseUrl}/api/users`, data);
    dispatch(createUserSuccess({ data: res.data, inputData: data }));
  } catch (err) {
    dispatch(createUserError({ status: true, message: err }));
  }

  dispatch(createUserLoading(false));
};

// update
export const updateUserActionHandler = (data) => async (dispatch) => {
  dispatch(updateUserLoading(true));

  try {
    let res = await axios.put(`${baseUrl}/api/users/7`, data);
    dispatch(updateUserSuccess({ data: res.data, id: 7, inputData: data }));
  } catch (err) {
    dispatch(updateUserError({ status: true, message: err }));
  }

  dispatch(updateUserLoading(false));
};

// delete
export const deleteUserActionHandler = (id) => async (dispatch) => {
  dispatch(deleteUserLoading(true));

  try {
    let res = await axios.delete(`${baseUrl}/api/users/${id}`);
    dispatch(deleteUserSuccess({ id: id }));
  } catch (err) {
    dispatch(deleteUserError({ status: true, message: err }));
  }

  dispatch(deleteUserLoading(false));
};
