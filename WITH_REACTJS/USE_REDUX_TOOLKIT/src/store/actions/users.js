import axios from "axios";
import { getAllUsers } from "../slices/usersSlice";

const getAllUsersHandler = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch(getAllUsers(res.data));
    })
    .catch((err) => {
      console.log("users data fetching error");
    });
};

export default getAllUsersHandler;
