import React from "react";
import { Link, Links, useLoaderData } from "react-router";
import HomeRecipes from "./HomeRecipes";

const Home = () => {
  const recipes = useLoaderData();
  const filteredRecipes = recipes
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 5);

  return (
    <div>
      <div className=" overflow-x-auto hero bg-[#ffffff]  text-[#252c2d] min-h-[80vh] border-double border-b-2 mt-3 ">
        <div className="hero-content gap-24 flex-col lg:flex-row-reverse">
          <img
            src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/12/Shakshuka-main-1.jpg"
            className="max-w-sm w-80 h-80 max-md:w-65 max-md:h-65 rounded-full border-4 border-[#A8F1FF] object-cover shadow-2xl"
          />
          <div className="max-md:text-center">
            <h1 className="text-7xl max-md:text-5xl font-bold text-[#05d0f9]">
              Fresh Flavors, Healthy Living
            </h1>
            <p className="py-6 max-md:text-md">
              Whether you're cooking for one or feeding a family, explore a
              hand-picked collection of recipes that combine ease, flavor, and
              freshness. From cozy breakfasts to quick weeknight dinners — we've
              got something to satisfy every craving.
            </p>
            <Link
              to={"/my-recipes"}
              className="btn bg-[#A8F1FF] border-none text-black"
            >
              My Recipes
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {filteredRecipes.map((recipe, index) => {
          return <HomeRecipes key={index} recipe={recipe}></HomeRecipes>;
        })}
      </div>
      <div className="flex justify-center my-5">
        <Link to={"/all-recipes"}>
          <button className="btn bg-[#A8F1FF] border-none text-black">
            All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
