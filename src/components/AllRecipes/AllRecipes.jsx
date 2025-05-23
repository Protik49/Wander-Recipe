import React, { useEffect, useState } from "react";

import HomeRecipes from "../Home/HomeRecipes";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedType, setSelectedType] = useState(["All"]);
  const types = [
    "All",
    "Mediterranean",
    "French",
    "American",
    "Japanese",
    "Thai",
    "Mexican",
    "Indian",
    "Italian",
    "Korean",
    "Chinese",
  ];

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredRecipes =
    selectedType === "All"
      ? recipes
      : recipes.filter((recipe) => (recipe.cuisineType = selectedType));

  return (
    <div>
      <div className="my-15 space-y-5">
        {" "}
        <h2 className="text-6xl text-center font-bold text-[#05d0f9]">
          Discover All of Our Recipes
        </h2>
        <p className="max-w-[80%] text-center mx-auto">
          Explore a world of delicious possibilities with our diverse collection
          of recipes. From comforting classics to bold new flavors, each dish is
          crafted to inspire your next meal.
        </p>
        <select
          value={selectedType}
          className="mt-4 bg-[#2C3747] text-[#cce1d5] px-4 py-2 rounded-md border border-[#05C852]"
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {types.map((type, index) =>  {
            <Option key={index} value={type}>
              {type}
            </Option>
          })}
        </select>
      </div>

      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-3  my-5">
        {filteredRecipes.map((recipe, index) => {
          return <HomeRecipes key={index} recipe={recipe}></HomeRecipes>;
        })}
      </div>
    </div>
  );
};

export default AllRecipes;
