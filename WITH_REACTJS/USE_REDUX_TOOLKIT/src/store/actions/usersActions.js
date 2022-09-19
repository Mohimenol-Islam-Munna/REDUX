import axios from "axios";
import baseURL from "../../utils/baseUrl";

import {
  fetchAllUserLoading,
  fetchAllUserError,
  fetchAllUserSuccess,
} from "../slices/usersSlice";

export const fetchAllUserActionHandler = () => async (dispatch) => {
  dispatch(fetchAllUserLoading(true));

  try {
    let res = await axios.get(`${baseURL}/api/users?page=2`);

    console.log("res ::", res);
  } catch (err) {
    console.log("error ::", err);
  }
};
