import Image from "next/image";
import React from "react";
import spoon from "../public/spoon.avif";

const page = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Image height={300} alt="spoon" src={spoon} />
    </div>
  );
};

export default page;
