import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import storeWrapper from "../store";

export const getStaticProps = storeWrapper.getStaticProps(
  (store) => async () => {
    console.log("store in getStaticProps :::", store.getState());

    return {
      props: {
        data: "PUST",
      },
    };
  }
);

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>NEXT JS WITH REDUX TOOlKIT</h2>
    </div>
  );
};

export default Home;
