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
    let res = await axios.get(`${baseUrl}/api/users?page=2`);
    dispatch(fetchAllUserError(null));
    dispatch(fetchAllUserSuccess({ data: res.data }));
  } catch (err) {
    dispatch(fetchAllUserError({ status: true, message: err }));
    dispatch(fetchAllUserSuccess(null));
  }

  dispatch(fetchAllUserLoading(false));
};

// fetch one
export const fetchOneUserActionHandler = () => async (dispatch) => {
  dispatch(fetchOneUserLoading(true));

  try {
    let res = await axios.get(`${baseUrl}/api/users/2`);
    dispatch(fetchOneUserError(null));
    dispatch(fetchOneUserSuccess({ data: res.data }));
  } catch (err) {
    dispatch(fetchOneUserError({ status: true, message: err }));
    dispatch(fetchOneUserSuccess(null));
  }

  dispatch(fetchOneUserLoading(false));
};

// create
export const createUserActionHandler = (data) => async (dispatch) => {
  dispatch(createUserLoading(true));

  try {
    let res = await axios.post(`${baseUrl}/api/users`, data);
    dispatch(createUserError(null));
    dispatch(createUserSuccess({ data: res.data }));
  } catch (err) {
    dispatch(createUserError({ status: true, message: err }));
    dispatch(createUserSuccess(null));
  }

  dispatch(createUserLoading(false));
};

// update
export const updateUserActionHandler = (data) => async (dispatch) => {
  dispatch(updateUserLoading(true));

  try {
    let res = await axios.put(`${baseUrl}/api/users/7`, data);
    dispatch(updateUserError(null));
    dispatch(updateUserSuccess({ data: res.data, id: 7 }));
  } catch (err) {
    dispatch(updateUserError({ status: true, message: err }));
    dispatch(updateUserSuccess(null));
  }

  dispatch(updateUserLoading(false));
};

// delete
export const deleteUserActionHandler = (id) => async (dispatch) => {
  dispatch(deleteUserLoading(true));

  try {
    let res = await axios.delete(`${baseUrl}/api/users/${id}`);
    dispatch(deleteUserError(null));
    dispatch(deleteUserSuccess({ id: id }));
  } catch (err) {
    dispatch(deleteUserError({ status: true, message: err }));
    dispatch(deleteUserSuccess(null));
  }

  dispatch(deleteUserLoading(false));
};
