import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import HomeRecipes from "./HomeRecipes";
import Accordion from "./Accordion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((res) => res.json())
      .then((data) => {
        const filteredRecipes = data
          .sort((a, b) => b.likeCount - a.likeCount)
          .slice(0, 6);

        setRecipes(filteredRecipes);
      });
  }, []);

  const filteredRecipes = recipes
    .sort((a, b) => b.likeCount - a.likeCount)
    .slice(0, 6);

  return (
    <div>
      <div className=" overflow-x-auto hero    min-h-[80vh] border-double border-b-2 mt-3 ">
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
      {/* Top Recipes */}
      <div>
        <div className="my-15 mt-25 space-y-5 flex flex-col items-center ">
          {" "}
          <h2 className="text-6xl text-center font-bold text-[#05d0f9]">
            Discover All of Our Recipes
          </h2>
          <p className="max-w-[80%] text-center mx-auto">
            Explore a world of delicious possibilities with our diverse
            collection of recipes. From comforting classics to bold new flavors,
            each dish is crafted to inspire your next meal.
          </p>
        </div>

        <div className="grid grid-cols-3  items-stretch max-md:grid-cols-2 gap-3  my-5">
          {filteredRecipes?.map((recipe, index) => {
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
      {/* Accordion Section */}
      <div className="my-30">
        <div className="my-15 mt-25 space-y-5 flex flex-col items-center">
          {" "}
          <h2 className="text-6xl text-center font-bold text-[#05d0f9]">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[80%] text-center mx-auto">
            Explore a world of delicious possibilities with our diverse
            collection of recipes. From comforting classics to bold new flavors,
            each dish is crafted to inspire your next meal.
          </p>
        </div>
        <Accordion />

        {/* TypeWriter */}
        <div className="text-center my-20">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-snug text-[#05d0f9] drop-shadow-md">
            <Typewriter
              words={[
                "Discover.",
                "Cook and Share.",
                "Your Favorite Recipes.",
                "All in One Place.",
              ]}
              loop={15}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>


      </div>
    </div>
  );
};

export default Home;
