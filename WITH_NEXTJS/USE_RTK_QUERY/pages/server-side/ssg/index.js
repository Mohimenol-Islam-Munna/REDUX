import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import {
  allCrickter,
  getRunningOperationPromises,
} from "../../../RTKQuery/api/applicationApi";
import storeWrapper from "../../../RTKQuery/store/index";

const ServerSideHome = ({ isError, isSuccess, error, data }) => {
  console.log("data 2:", data);

  if (isError) {
    return (
      <div className={styles.container}>
        <h2 style={{ textAlign: "center", color: "salmon" }}>
          Something Wrong
        </h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "center" }}>
        NEXT JS WITH RTK QUERY (STATIC SITE GENERATION )
      </h2>

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
        {data?.map((cickter) => (
          <div
            key={cickter.id}
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
              src={cickter.avatar}
              alt={cickter.first_name}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <h2>Name: {`${cickter.first_name} ${cickter.last_name}`}</h2>
            <h4>Email: {cickter.email} </h4>
            <Link href={`details/${cickter.id}`} passHref>
              <button style={{ marginRight: "0.5rem", padding: "5px" }}>
                View Details
              </button>
            </Link>
            <Link href={`update/${cickter.id}`} passHref>
              <button style={{ marginRight: "0.5rem", padding: "5px" }}>
                Go To Update Page
              </button>
            </Link>
            <button
              style={{ marginRight: "0.5rem", padding: "5px" }}
              onClick={() => deleteEngineerHandler(cickter.id)}
            >
              Delete Cickter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = storeWrapper.getStaticProps(
  (store) => async (context) => {
    const { isLoading, isError, isSuccess, error, data } = await store.dispatch(
      allCrickter.initiate()
    );

    // documentation tell use this line but when use this line then all results(isLoading, isError, isSuccess, error, data) are undefined
    // await Promise.all(getRunningOperationPromises());

    if (isSuccess) {
      return {
        props: {
          isError: isError,
          isSuccess: isSuccess,
          error: null,
          data: data?.data,
        },
      };
    } else {
      return {
        props: {
          isError: isError,
          isSuccess: isSuccess,
        