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
import AllRecipes from "./components/AllRecipes/AllRecipes.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";
import AddRecipe from "./components/AddRecipe.jsx";
import MyRecipes from "./components/MyRecipes/MyRecipes.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://wander-recipe-server.vercel.app/recipes"),
      },
      {
        path: "all-recipes",
        element: (
          <PrivateRoot>
            <AllRecipes />
          </PrivateRoot>
        ),
      },
      {
        path: "/all-recipes/:id",
        element: (
          <PrivateRoot>
            <RecipeDetails />
          </PrivateRoot>
        ),
        loader: ({ params }) =>
          fetch(
            `https://wander-recipe-server.vercel.app/all-recipes/${params.id}`
          ),
      },
      {
        path: "/add-recipes",
        element: (
          <PrivateRoot>
            <AddRecipe />
          </PrivateRoot>
        ),
      },
      {
        path: "/my-recipes",
        element: (
          <PrivateRoot>
            <MyRecipes />
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
