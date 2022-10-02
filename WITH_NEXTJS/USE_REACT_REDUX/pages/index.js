import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Home.module.css";
import { fetchAllUsers } from "../store/actions/usersAction";

const Home = ({ data }) => {
  const store = useSelector((store) => store);
  console.log("application store ::", store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center" }}>REDUX WITH NEXT JS</h2>
      <h4>Data From Static Site Generation : {data}</h4>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      data: "munna",
    },
  };
};

export default Home;
