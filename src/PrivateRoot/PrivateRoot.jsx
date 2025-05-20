import { Navigate } from 'react-router';
import { useLocation } from "react-router";
import React, { use, useContext } from "react";
import { myContext } from "../contexts/Authprovider";
import Loading from "./Loading";


const PrivateRoot = ({ children }) => {
  const { user, loading } = useContext(myContext);
  
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ pathname }} replace></Navigate>;
};

export default PrivateRoot;
