import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import Mainlayout from "./Layout/Mainlayout.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-recipes",
        element: <div>Hi</div>,
      },
      { path: "/add-recipes", element: <div>Hello</div> },
      { path: "/my-recipes", element: <div>Hi</div> },
      { path: "/login", Component: Login },
      {path: "/signup", Component: SignUp}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
