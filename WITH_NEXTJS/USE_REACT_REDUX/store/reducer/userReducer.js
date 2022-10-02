import { GET_USERS } from "../actions/actionsTypes";

const initialState = {
  name: "user State",
  usersLoading: false,
  data: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return { ...state, data: payload.data };

    default:
      return state;
  }
};

export default userReducer;
