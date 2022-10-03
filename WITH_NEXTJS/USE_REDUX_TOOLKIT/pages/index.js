import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

import { useSelector, useDispatch } from "react-redux";
import storeWrapper from "../store";
import { userActionHandler } from "../store/actions/userAction";
import { fetchAllUser } from "../store/slices/userSlice";
import { readTasks } from "../store/slices/tasksSlice";

// export const getStaticProps = storeWrapper.getStaticProps(
//   (store) => async (context) => {
//     // store.dispatch(userActionHandler());
//     await store.dispatch(fetchAllUser("data go"));

//     return {
//       props: {
//         data: "user",
//       },
//     };
//   }
// );

export const getStaticProps = storeWrapper.getStaticProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(readTasks({ req, res }));
    }
);

const Home = ({ data }) => {
  const store = useSelector((store) => store.tasks);
  const dispatch = useDispatch();

  console.log("application store ::", store);

  // useEffect(() => {
  //   // dispatch(fetchAllUser("client side dispatch"));
  //   dispatch(userActionHandler());
  // }, []);

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "center" }}>NEXT JS WITH REDUX TOOLKIT</h2>
    </div>
  );
};

export default Home;
