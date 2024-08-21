import { GET_USERS } from "./actionsTypes";
import axios from "axios";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("@@@@ res data :by getStaticProps:", res.data);

    return dispatch({ type: GET_USERS, payload: res.data });
  } catch (err) {
    console.log("users data fetching error ::", err);
  }
};
