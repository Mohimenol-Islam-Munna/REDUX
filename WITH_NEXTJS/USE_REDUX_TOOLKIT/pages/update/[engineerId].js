import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { updateEngineerAction } from "../../mainStore/actions/engineerActions";

const UpdateEngineer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { engineerId } = router.query;

  // update handler
  const updateEngineerHandler = (data) => {
    dispatch(updateEngineerAction({data, engineerId, router}));
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
          updateEngineerHandler({
            name: "morpheus",
            job: "zion resident",
          })
        }
      >
        Submit For Update Engineer {engineerId}
      </button>
    </div>
  );
};

export default UpdateEngineer;
