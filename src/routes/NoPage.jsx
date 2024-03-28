import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="flex flex-col items-center mt-12 gap-6 relative min-h-screen">
      <h2 className="text-lg">No Page Found !!</h2>
      <Link
        to={"/"}
        className="px-4 py-2 text-xl uppercase rounded-lg w-48 text-center bg-violet duration-200 hover:scale-x-110 hover:scale-y-105"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default NoPage;
