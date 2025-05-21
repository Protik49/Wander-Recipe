import React from "react";
import { useLoaderData } from "react-router";
import { AiOutlineLike } from "react-icons/ai";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const {
    title,
    image,
    cuisineType,
    preparationTime,
    likeCount,
    categories,
    ingredients,
    instructions,
  } = recipe;
  console.log(recipe);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
     
      <div className="p-[2px] bg-gradient-to-br from-[#A8F1FF] via-[#63E6BE] to-[#4FC3F7] rounded-xl">
        
        <div className="bg-white shadow rounded-xl overflow-hidden flex flex-col gap-6 md:flex-row">
          {/* Left Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover md:h-full max-h-80 md:max-h-none"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 w-full p-4 space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
              <p className="text-sm text-gray-500">{cuisineType} Cuisine</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700">
              <span className="px-2 py-1 bg-[#A8F1FF] rounded-md">
                ⏱ {preparationTime} mins
              </span>
              <span className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-md">
                <AiOutlineLike /> {likeCount}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="bg-[#A8F1FF] text-black px-3 py-0.5 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div>
              <h2 className="text-base font-semibold mb-1">Ingredients</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                {ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold mb-1">Instructions</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {instructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
