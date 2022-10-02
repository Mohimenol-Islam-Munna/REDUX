import React from "react";

const ServerSide = ({ data }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Server Side Rendaring</h2>
      <h4>Data From Server Side Rendring : {data}</h4>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      data: "user infomations",
    },
  };
};

export default ServerSide;
