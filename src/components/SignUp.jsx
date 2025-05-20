import React, { useContext, useState } from "react";
import { handleSignUp } from "../firebase/firebaseFunks";
import { myContext } from "../contexts/Authprovider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const { user, setUser, loading } = useContext(myContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignupsubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value; 
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    

    handleSignUp(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        navigate("/");
        return updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });
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
          <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
          <form onSubmit={handleSignupsubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
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
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="URL"
            />
            <div>
              <p className="">
                Already Registered?{" "}
                <Link className="underline" to={"/login"}>
                  {" "}
                  Login
                </Link>
              </p>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
