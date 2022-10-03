import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { fetchAllUser } from "../slices/userSlice";

export const userActionHandler = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/api/users?page=2`);
    dispatch(fetchAllUser(res.data));
  } catch (err) {
    console.log("@@@@@@ user data fetch error ::", err);
  }
};
