import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEngineerAction } from "../../mainStore/actions/engineerActions";
import storeWrapper from "../../mainStore";
import { useRouter } from "next/router";

const CreateEngineer = () => {
  const router = useRouter();

  const { createEngineerLoading, createEngineerError } = useSelector(
    (store) => store.engineer
  );
  const dispatch = useDispatch();

  //   console.log("createEngineerLoading ::", createEngineerLoading);
  //   console.log("createEngineerError ::", createEngineerError);

  // create engineer handler
  const createEngineerHandler = async (data) => {
    dispatch(createEngineerAction({ data, router }));
  };

  return (
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
      <button
        style={{ marginRight: "0.5rem", padding: "5px" }}
        onClick={() =>
          createEngineerHandler({
            name: "Md Mohimenol Islam Munna",
            job: "Full Stack Javascript Developer",
          })
        }
      >
        Submit For Create Engineer
      </button>
    </div>
  );
};

export default CreateEngineer;
