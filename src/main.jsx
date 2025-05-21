import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import Mainlayout from "./Layout/Mainlayout.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import PrivateRoot from "./PrivateRoot/PrivateRoot.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        Component: Home,
        loader: ()=>fetch("http://localhost:3000/recipes")
      },
      {
        path: "all-recipes",
        element: (
          <PrivateRoot>
            <div>Hi</div>
          </PrivateRoot>
        ),
      },
      {
        path: "/add-recipes",
        element: (
          <PrivateRoot>
            <div>Hello</div>
          </PrivateRoot>
        ),
      },
      {
        path: "/my-recipes",
        element: (
          <PrivateRoot>
            <div>Hi</div>
          </PrivateRoot>
        ),
      },
      { path: "/login", Component: Login },
      { path: "/signup", Component: SignUp },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
