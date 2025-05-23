import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AiOutlineLike } from "react-icons/ai";
import { myContext } from "../../contexts/Authprovider";

const HomeRecipes = ({ recipe }) => {
  const { _id, title, image, cuisineType, instructions, likeCount } = recipe;
  const { user } = useContext(myContext);
  const [alreadyLike, setAlreadyLike] = useState(false);
  const [likes, setLikes] = useState(likeCount);

  const handleLike = () => {
    if (user) {
      fetch(`http://localhost:3000/recipes/${_id}/like`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ likedBy: user?.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount !== 0) {
            setAlreadyLike(true);
            setLikes(data.likes);
          }
        });
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-full h-full shadow-sm">
        <figure>
          <img src={image} alt={title} className="h-48 w-full object-cover" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title flex max-md:flex-col">
            {title}
            <div className="badge badge-outline text-[#05d0f9]">
              {cuisineType}
            </div>
          </h2>
          <p>{instructions}</p>
          <div className="card-actions mt-3 flex-row gap-6 max-md:flex-col-reverse  max-md:gap-3 items-center justify-between">
            <div>
              <Link to={`/all-recipes/${_id}`}>
                <button className="btn bg-[#A8F1FF] border-none text-black">
                  Details
                </button>
              </Link>
            </div>
            <div
              className="badge badge-outline cursor-pointer"
              onClick={handleLike}
            >
              {" "}
              <AiOutlineLike
                className={alreadyLike ? "text-[#A8F1FF]" : null}
              />{" "}
              {likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRecipes;
