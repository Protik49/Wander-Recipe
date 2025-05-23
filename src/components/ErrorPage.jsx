import React from "react";
import { Link } from "react-router";
import { IoFastFood } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-9 justify-center min-h-[80vh]">
        <IoFastFood size={154} fill="#A8F1FF" />
        <p className="text-5xl text-gray-400 text-center">
          <span className="font-bold">404</span> - Nothing found
        </p>
        <Link to={"/"} className="btn bg-[#A8F1FF] border-none text-black">
          {" "}
          Go Home{" "}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
