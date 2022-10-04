import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import storeWrapper from "../mainStore/index";
import {
  createEngineerAction,
  fetchAllEngineerAction,
  fetchEngineerAction,
  updateEngineerAction,
  deleteEngineerAction,
} from "../mainStore/actions/engineerActions";

export const getStaticProps = storeWrapper.getStaticProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(fetchAllEngineerAction());
    }
);

const Home = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("application store ::", store);

  // useEffect(() => {
  //   dispatch(fetchAllEngineerAction());
  // }, []);

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "center" }}>NEXT JS WITH REDUX TOOLKIT</h2>
    </div>
  );
};

export default Home;
