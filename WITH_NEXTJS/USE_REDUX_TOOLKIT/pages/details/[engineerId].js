import React from "react";
import { useSelector } from "react-redux";
import storeWrapper from "../../mainStore";

import { fetchEngineerAction } from "../../mainStore/actions/engineerActions";

const EngineerDetails = ({ data }) => {
  const { fetchEngineerLoading, fetchEngineerError, engineerData } =
    useSelector((store) => store.engineer);

//   console.log("fetchEngineerLoading ::", fetchEngineerLoading);
//   console.log("fetchEngineerError ::", fetchEngineerError);
//   console.log("engineerData ::", engineerData);

  if (fetchEngineerLoading) {
    return (
      <div
        style={{
          width: "80%",
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Loading ...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "80%",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <div
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
          src={engineerData?.avatar}
          alt={engineerData?.first_name}
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
        <h2>
          Name: {`${engineerData?.first_name} ${engineerData?.last_name}`}
        </h2>
        <h4>Email: {engineerData?.email} </h4>
      </div>
    </div>
  );
};

export const getServerSideProps = storeWrapper.getServerSideProps(
  (store) => async (context) => {
    const { engineerId } = context.query;

    await store.dispatch(fetchEngineerAction(engineerId));

    return {
      props: {
        data: "date from getserverside props",
      },
    };
  }
);

export default EngineerDetails;
