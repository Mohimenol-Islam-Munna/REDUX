import { GET_USERS } from "./actionsTypes";
import axios from "axios";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/users");

    console.log("res data ::", res);

    dispatch({ type: GET_USERS, payload: res });
  } catch (err) {
    console.log("users data fetching error ::", err);
  }
};
