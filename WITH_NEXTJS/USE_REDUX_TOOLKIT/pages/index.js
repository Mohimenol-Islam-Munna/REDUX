import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import storeWrapper from "../mainStore/index";
import {
  fetchAllEngineerAction,
  deleteEngineerAction,
} from "../mainStore/actions/engineerActions";

const Home = () => {
  const { fetchAllEngineerLoading, fetchAllEngineerError, engineerList } =
    useSelector((store) => store.engineer);

  const dispatch = useDispatch();

  // console.log("fetchAllEngineerLoading ::", fetchAllEngineerLoading);
  // console.log("fetchAllEngineerError ::", fetchAllEngineerError);
  console.log("engineerList ::", engineerList);

  // delete engineer handler 
  const deleteEngineerHandler = (id) => {
    dispatch(deleteEngineerAction(id));
  };

  if (fetchAllEngineerLoading) {
    return (
      <div className={styles.container}>
        <h2 style={{ textAlign: "center" }}>Loading ...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "center" }}>NEXT JS WITH REDUX TOOLKIT</h2>
      <div
        style={{
          width: "80%",
          margin: "0.5rem auto",
          backgroundColor: "lightgray",
          padding: "1rem",
          borderRadius: "0.3rem",
          textAlign: "center",
        }}
      >
        <Link href="create" passHref>
          <button style={{ marginRight: "0.5rem", padding: "5px" }}>
            Go To Create Page
          </button>
        </Link>
      </div>
      <div style={{ width: "80%", margin: "1.5rem auto" }}>
        {engineerList?.map((engineer) => (
          <div
            key={engineer.id}
            style={{
              width: "100%",
              margin: "0.5rem 0",
              backgroundColor: "lightgray",
              padding: "1rem",
              borderRadius: "0.3rem",
              textAlign: "center",
            }}
          >
            <img
              src={engineer.avatar}
              alt={engineer.first_name}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <h2>Name: {`${engineer.first_name} ${engineer.last_name}`}</h2>
            <h4>Email: {engineer.email} </h4>
            <Link href={`details/${engineer.id}`} passHref>
              <button style={{ marginRight: "0.5rem", padding: "5px" }}>
                View Details
              </button>
            </Link>
            <Link href={`update/${engineer.id}`} passHref>
              <button style={{ marginRight: "0.5rem", padding: "5px" }}>
                Go To Update Page
              </button>
            </Link>
            <button
              style={{ marginRight: "0.5rem", padding: "5px" }}
              onClick={() => deleteEngineerHandler(engineer.id)}
            >
              Delete Engineer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = storeWrapper.getStaticProps(
  (store) =>
    async ({ req, res }) => {
      await store.dispatch(fetchAllEngineerAction());

      return {
        props: {},
      };
    }
);

export default Home;
