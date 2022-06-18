import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-center p-5 bg-white shadow-md gap-x-5">
      <Link
        to={"/"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Home
      </Link>
      <Link
        to={"/blog"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Blog
      </Link>
      <Link
        to={"profile"}
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
      >
        Profile
      </Link>
    </div>
  );
};

export default Nav;
