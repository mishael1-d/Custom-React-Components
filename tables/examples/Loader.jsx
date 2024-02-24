import React from "react";
import { ClipLoader } from "react-spinners";

function Loader({ color }) {
  return (
    <>
      <ClipLoader color={color ? color : "white"} size={20} />
    </>
  );
}

export default Loader;
