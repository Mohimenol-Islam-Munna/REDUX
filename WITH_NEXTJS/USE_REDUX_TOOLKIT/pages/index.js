import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import storeWrapper from "../store";
import axios from "axios";
import { fetchAllUser } from "../store/slices/userSlice";

export const getStaticProps = storeWrapper.getStaticProps(
  (store) => async (context) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      store.dispatch(fetchAllUser(res.data));
    } catch (err) {
      console.log("data fetch error ::", err);
    }

    return {
      props: {
        data: "user",
      },
    };
  }
);

const Home = ({ data }) => {
  const store = useSelector((store) => store);

  console.log("store ::", store);

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "center" }}>NEXT JS WITH REDUX TOOLKIT</h2>
    </div>
  );
};

export default Home;
