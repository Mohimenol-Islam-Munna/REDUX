import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { fetchAllUsers } from "../store/actions/usersAction";
import storeWrapper from "../store";
import { GET_USERS } from "../store/actions/actionsTypes";

const Home = ({ data }) => {
  const store = useSelector((store) => store);
  console.log("application store ::", store);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center" }}>REDUX WITH NEXT JS</h2>
      <h4>Data From Static Site Generation : {data}</h4>
    </div>
  );
};

export const getStaticProps = storeWrapper.getStaticProps(
  (store) => async (context) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    store.dispatch({ type: GET_USERS, payload: res.data });
    
    return {
      props: {
        data: "Munna",
      },
    };
  }
);

export default Home;
