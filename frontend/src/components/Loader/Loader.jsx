import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        display: "block",
        margin: "0px auto",
      }}
    >
      <span className="sr-only">loading</span>
    </Spinner>
  );
};

export default Loader;
