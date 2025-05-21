import React from "react";

const HomeRecipes = ({ recipe }) => {
  const { title, image, cuisineType, instructions, likeCount } = recipe;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{cuisineType}</div>
          </h2>
          <p>{instructions}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Liked by: {likeCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRecipes;
