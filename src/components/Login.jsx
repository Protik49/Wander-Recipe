import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        data-theme="dark"
      >
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">
                Not Registered? <Link className="underline" to={"/signup"}> Sign Up</Link>
              </a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
