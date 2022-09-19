import axios from "axios";
import baseUrl from "../../utils/baseUrl";

import {
  fetchAllUserLoading,
  fetchAllUserError,
  fetchAllUserSuccess,
  fetchOneUserError,
  fetchOneUserSuccess,
  fetchOneUserLoading,
} from "../slices/usersSlice";

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
