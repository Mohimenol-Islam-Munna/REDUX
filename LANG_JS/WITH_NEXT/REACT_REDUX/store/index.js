import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer/rootReducer";

const composeEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const newState = {
      ...state,
      ...action.payload,
    };

    return newState;
  } else {
    return rootReducer(state, action);
  }
};

const store = () => createStore(reducer, applyMiddleware(thunk));

const storeWrapper = createWrapper(store);

export default storeWrapper;
