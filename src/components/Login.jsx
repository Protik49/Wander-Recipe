import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { myContext } from "../contexts/Authprovider";
import { handleGoogleSignIn, handleLogin } from "../firebase/firebaseFunks";

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

  const handleGoogle = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(state ? state : "/");
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;

        setError(errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border-2 border-[#A8F1FF]"
        data-theme="light"
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>{" "}
            <button
              onClick={handleGoogle}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </form>

          <p className="">
            Not Registered?{" "}
            <Link className="underline" to={"/signup"}>
              {" "}
              Sign Up
            </Link>
          </p>
          {error && (
            <p className="text-red-500  text-sm break-words whitespace-normal">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
