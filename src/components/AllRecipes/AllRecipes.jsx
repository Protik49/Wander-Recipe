import React from 'react';
import { useLoaderData } from 'react-router';

import HomeRecipes from '../Home/HomeRecipes';

const AllRecipes = () => {
    const recipes = useLoaderData();
    return (
      <div>
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-3  my-5">
          {recipes.map((recipe, index) => {
            return <HomeRecipes key={index} recipe={recipe}></HomeRecipes>;
          })}
        </div>
      </div>
      
    );
};

export default AllRecipes;