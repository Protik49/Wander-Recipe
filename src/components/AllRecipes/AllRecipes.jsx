import React, { useEffect, useState } from 'react';


import HomeRecipes from '../Home/HomeRecipes';

const AllRecipes = () => {
    
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/recipes")
          .then((res) => res.json())
          .then((data) => setRecipes(data))
          .catch((error) => console.error(error));
    },[])
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