import React, { useContext, useEffect, useState } from "react";
import MyRecipesItems from './MyRecipesItems'

import { myContext } from "../../contexts/Authprovider";
import NoItemsFound from "../NoItemsFound";
import HomeRecipes from "../Home/HomeRecipes";
import Loading from "../../PrivateRoot/Loading";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(null)

  const { user } = useContext(myContext);

  useEffect(() => { 
    
    
    fetch(`http://localhost:3000/recipes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
       
      })
      .catch((error) => console.error(error));

      setDeleted(false)
  }, [user,deleted]);
  return (
    <div>
      <div>
        <div>
          {loading ? (
            <Loading />
          ) : recipes.length > 0 ? (
            <div className="grid grid-cols-3 max-md:grid-cols-1 items-stretch gap-3 place-items-center my-5">
              {recipes.map((recipe, index) => (
                <div key={index}>
                  <MyRecipesItems recipe={recipe} setDeleted={setDeleted} />
                </div>
              ))}
            </div>
          ) : (
            <div className="col-span-4">
              <NoItemsFound />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
