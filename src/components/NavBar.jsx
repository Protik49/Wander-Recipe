import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import "../App.css";
import { myContext } from "../contexts/Authprovider";
import { handleSignOut } from "../firebase/firebaseFunks";
import { Tooltip } from "react-tooltip";

const NavBar = () => {
  const { user, setUser, loading } = useContext(myContext);

  const handleLogout = () => {
    handleSignOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const toggle = (
    <>
      <label
        className="swap swap-rotate "
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Toggle Theme"
      >
        <input
          type="checkbox"
          onChange={(e) => {
            const theme = e.target.checked ? "synthwave" : "light";
            document.documentElement.setAttribute("data-theme", theme);
          }}
        />

        {/* Sun icon */}
        <svg
          className="swap-on fill-current w-8 h-8 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-9a1 1 0 011 1v2a1 1 0 01-2 0V4a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm9-7a1 1 0 010 2h-2a1 1 0 010-2h2zM6 12a1 1 0 010 2H4a1 1 0 010-2h2z" />
        </svg>

        {/* Moon icon */}
        <svg
          className="swap-off fill-current w-8 h-8 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36 10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
        </svg>
      </label>
      <Tooltip id="my-tooltip" />
    </>
  );

  const links = (
    <>
      <li className="hover:bg-[#A8F1FF]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-b-[#a8f1ff] font-mono" : "font-mono"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="hover:bg-[#A8F1FF]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-b-[#a8f1ff] font-mono" : "font-mono"
          }
          to={"/all-recipes"}
        >
          All Recipes
        </NavLink>
      </li>
      <li className="hover:bg-[#A8F1FF]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-b-[#a8f1ff] font-mono" : "font-mono"
          }
          to={"/add-recipes"}
        >
          Add Recipes
        </NavLink>
      </li>
      <li className="hover:bg-[#A8F1FF]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "border-b-2 border-b-[#a8f1ff] font-mono" : "font-mono"
          }
          to={"/my-recipes"}
        >
          My Recipes
        </NavLink>
      </li>
    </>
  );

  const profile = (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              src={user?.photoURL}
              alt="profile pic"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#A8F1FF] shadow-2xl"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-[#A8F1FF] rounded-box z-1 mt-3 w-52 p-2 shadow-2xl space-y-5"
        >
          <li className="">
            <p className="text-[16px] justify-between">
              Username:
              <span className="font-semibold">{user?.displayName}</span>
            </p>
          </li>

          <li>
            <button
              className="btn shadow-2xl bg-[#ffffff] text-[#000000]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      {toggle}
    </>
  );

  const buttons = (
    <>
      <Link to={"/login"} className="btn bg-[#A8F1FF] text-[#000000]">
        Login
      </Link>
      <Link to={"/signup"} className="btn bg-[#A8F1FF] text-[#000000]">
        Sign Up
      </Link>
      {toggle}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl font-mono">
            Wander Recipe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {loading ? (
            <span className="loading loading-spinner bg-[#A8F1FF] text-success"></span>
          ) : user ? (
            profile
          ) : (
            buttons
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
