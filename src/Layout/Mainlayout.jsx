import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { myContext } from "../contexts/Authprovider";
import Footer from "../components/Footer";

const Mainlayout = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const contextElements = { user, setUser, loading, setLoading };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="font-mono">
      <myContext.Provider value={contextElements}>
        <NavBar></NavBar>
        <div className="w-11/12 mx-auto">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </myContext.Provider>
    </div>
  );
};

export default Mainlayout;
