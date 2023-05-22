import React from "react";
import { useLoaderData } from "react-router-dom";

const ToysDetail = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);

  return (
    <div>
      <h2>hbjdsb</h2>
    </div>
  );
};

export default ToysDetail;
