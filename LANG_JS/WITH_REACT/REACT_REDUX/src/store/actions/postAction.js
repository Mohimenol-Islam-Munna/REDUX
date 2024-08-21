import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import {
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  ALL_POST_LOADING,
  ALL_POST_SUCCESS,
  ALL_POST_ERROR,
  SINGLE_POSTS_LOADING,
  SINGLE_POST_SUCCESS,
  SINGLE_POST_ERROR,
  UPDATE_POST_LOADING,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from "./actionTypes";

// create post
export const createPost = (data) => async (dispatch) => {
  dispatch({ type: CREATE_POST_LOADING, payload: true });

  try {
    // @@@@@@ uncomment this below code while you have valid create api
    // const res = await axios.post(`${baseUrl}/createPost`, data, {
    //   headers: {
    //     Authorization: "Bearer paste your authorization token here",
    //     "Content-type": "application/json",
    //   },
    // });

    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CREATE_POST_ERROR, payload: err.message });
  } finally {
    dispatch({ type: CREATE_POST_LOADING, payload: false });
  }
};

// get all post from server
export const getAllPost = () => async (dispatch) => {
  dispatch({ type: ALL_POST_LOADING, payload: true });

  try {
    const res = await axios.get(`${baseUrl}/posts`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    dispatch({ type: ALL_POST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ALL_POST_ERROR, payload: err.message });
  } finally {
    dispatch({ type: ALL_POST_LOADING, payload: false });
  }
};

// update post
export const updatePost = (id, data) => async (dispatch) => {
  dispatch({ type: UPDATE_POST_LOADING, payload: true });

  try {
    // @@@@@@ uncomment this below code while you have valid update api
    // const res = await axios.patch(`${baseUrl}/updatePost/${id}`, data, {
    //   headers: {
    //     Authorization: "Bearer paste yuor token here",
    //     "Content-type": "application/json",
    //   },
    // });

    dispatch({ type: UPDATE_POST_SUCCESS, payload: { id, data } });
  } catch (err) {
    dispatch({ type: UPDATE_POST_ERROR, payload: err.message });
  } finally {
    dispatch({ type: UPDATE_POST_LOADING, payload: false });
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: DELETE_POST_LOADING, payload: true });
  try {
    // @@@@@@ uncomment this below code while you have valid update api
    // const res = await axios.delete(`${baseUrl}/delete/${id}`, {
    //   headers: {
    //     Authorizaton: "Bearer paste your authorization token here",
    //   },
    // });

    dispatch({ type: DELETE_POST_SUCCESS, payload: id });
  } catch (err) {
    dispatch({ type: DELETE_POST_ERROR, payload: err.message });
  } finally {
    dispatch({ type: DELETE_POST_LOADING, payload: false });
  }
};
