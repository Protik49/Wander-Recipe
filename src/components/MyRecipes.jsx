import React, { useContext, useEffect, useState } from "react";

import { myContext } from "../contexts/Authprovider";
import NoItemsFound from "./NoItemsFound";
import HomeRecipes from "./Home/HomeRecipes";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const { user } = useContext(myContext);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, [user]);
  return (
    <div>
      <div>
        <div>
          {recipes > 0 ? (
            recipes.map((recipe, index) => {
              return (
                <div className="grid grid-cols-4 max-md:grid-cols-2 gap-3  my-5">
                  <HomeRecipes key={index} recipe={recipe}></HomeRecipes>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center">
              <NoItemsFound />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
