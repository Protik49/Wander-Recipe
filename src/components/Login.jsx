import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { myContext } from "../contexts/Authprovider";
import { handleLogin } from "../firebase/firebaseFunks";

const Login = () => {
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(myContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    handleLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        navigate(state ? state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        data-theme="dark"
      >
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <p className="">
                Not Registered?{" "}
                <Link className="underline" to={"/signup"}>
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
