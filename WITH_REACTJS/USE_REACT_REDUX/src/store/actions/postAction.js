import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { GET_ALL_POST } from "./actionTypes";

const getAllPost = () => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/posts`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    dispatch({ type: GET_ALL_POST, payload: res });
  } catch (err) {
  } finally {
  }
};
