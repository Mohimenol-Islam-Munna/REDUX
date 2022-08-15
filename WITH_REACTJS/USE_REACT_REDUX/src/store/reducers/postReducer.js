// action types
import {
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  ALL_POST_LOADING,
  ALL_POST_SUCCESS,
  ALL_POST_ERROR,
  SINGLE_POST_LOADING,
  SINGLE_POST_SUCCESS,
  SINGLE_POST_ERROR,
  UPDATE_POST_LOADING,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from "../actions/actionTypes";

// initial state
const initialState = {
  postStateTitle: "post",
  postStateDescription:
    "This reducer is used for managing all post related data",

  isCreatePostLoading: false,
  isAllPostLoading: false,
  isSinglePostLoading: false,
  isUpdatePostLoading: false,
  isDeletePostLoading: false,

  createPostError: {
    status: false,
    message: null,
  },
  allPostError: {
    status: false,
    message: null,
  },
  singlePostError: {
    status: false,
    message: null,
  },
  updatePostError: {
    status: false,
    message: null,
  },
  deletePostError: {
    status: false,
    message: null,
  },

  postStateData: [],
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  // update state based on action type
  switch (type) {
    // create post
    case CREATE_POST_LOADING:
      return {
        ...state,
        isCreatePostLoading: payload,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        postStateData: [...state.postStateData, payload],
      };

    case CREATE_POST_ERROR:
      return {
        ...state,
        createPostError: {
          status: true,
          message: payload,
        },
      };

    // all post
    case ALL_POST_LOADING:
      return {
        ...state,
        isAllPostLoading: payload,
      };

    case ALL_POST_SUCCESS:
      return {
        ...state,
        postStateData: payload,
      };

    case ALL_POST_ERROR:
      return {
        ...state,
        allPostError: {
          status: true,
          message: payload,
        },
      };

    // single post
    case SINGLE_POST_LOADING:
      return state;

    case SINGLE_POST_SUCCESS:
      return state;

    case SINGLE_POST_ERROR:
      return state;

    // update post
    case UPDATE_POST_LOADING:
      return {
        ...state,
        isUpdatePostLoading: payload,
      };

    case UPDATE_POST_SUCCESS:
      const { id, data } = payload;

      const newPostStateData = [...state.postStateData];

      const selectedPostIndex = newPostStateData.findIndex(
        (post) => post.id === id
      );

      newPostStateData[selectedPostIndex].title = data.title;
      newPostStateData[selectedPostIndex].body = data.body;

      return {
        ...state,
        postStateData: newPostStateData,
      };

    case UPDATE_POST_ERROR:
      return state;

    // delete post
    case DELETE_POST_LOADING:
      return state;

    case DELETE_POST_SUCCESS:
      return state;

    case DELETE_POST_ERROR:
      return state;

    default:
      return state;
  }
};

export default postReducer;
