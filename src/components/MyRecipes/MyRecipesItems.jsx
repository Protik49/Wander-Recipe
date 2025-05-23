import React, { useState } from "react";
import Swal from "sweetalert2";

const MyRecipesItems = ({ recipe, setDeleted }) => {
  const [formData, setFormData] = useState({
    title: recipe.title,
    image: recipe.image,
    cuisineType: recipe.cuisineType,
    preparationTime: recipe.preparationTime,
    likeCount: recipe.likeCount,
    categories: recipe.categories,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
  });

  

  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            setDeleted((prev) => !prev);
          });
      }
    });
  };

  const onUpdate = (id) => {
    document.getElementById(`modal-${id}`).showModal();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const list = new Set(prevData[name]);
        if (checked) list.add(value);
        else list.delete(value);
        return { ...prevData, [name]: Array.from(list) };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/recipes/${recipe._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your recipe has been updated!",
          showConfirmButton: false,
          timer: 1500,
        });

        

        setDeleted((prev) => !prev);

        document.getElementById(`modal-${recipe._id}`).close();
      });
    
  };

  const categoriesList = [
    "Lunch",
    "Dinner",
    "Breakfast",
    "Vegan",
    "Dessert",
    "Snack",
    "Gluten-Free",
    "Low-Carb",
    "Healthy",
    "Quick & Easy",
  ];

  const ingredientsList = [
    "Chicken",
    "Beef",
    "Tofu",
    "Noodles",
    "Rice",
    "Garlic",
    "Onion",
    "Tomato",
    "Cheese",
    "Spinach",
    "Potato",
    "Egg",
  ];

  return (
    <div className="max-w-xl card w-full h-full bg-white rounded-2xl shadow-md border border-[#A8F1FF] overflow-hidden hover:shadow-xl transition-all duration-300">
      <img
        src={formData.image}
        alt={formData.title}
        className="w-full h-64 object-cover border-b border-[#A8F1FF]"
      />

      <div className="p-5 space-y-3">
        <h2 className="text-2xl font-semibold text-[#05B5CF]">
          {formData.title}
        </h2>

        <div className="text-sm text-gray-600">
          <p>
            <span className="font-bold">Cuisine:</span> {formData.cuisineType}
          </p>
          <p>
            <span className="font-bold">Prep Time:</span>{" "}
            {formData.preparationTime} mins
          </p>
          <p>
            <span className="font-bold">Likes:</span> {formData.likeCount}
          </p>
          <p>
            <span className="font-bold">Categories:</span>{" "}
            {formData.categories.join(", ")}
          </p>
        </div>

        <div className="text-sm text-gray-700">
          <p className="font-bold">Ingredients:</p>
          <ul className="list-disc list-inside pl-2">
            {formData.ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-gray-700">
          <p className="font-bold">Instructions:</p>
          <p className="text-justify">{formData.instructions}</p>
        </div>

        <div className="flex justify-end  gap-3 pt-4">
          <button
            onClick={() => onUpdate(recipe._id)}
            className="px-4 py-1 rounded-lg bg-[#A8F1FF] text-black cursor-pointer hover:bg-[#91e5f5] transition"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(recipe._id)}
            className="px-4 py-1 rounded-lg btn bg-red-100 text-red-600 cursor-pointer border border-red-300 hover:bg-red-200 transition"
          >
            Delete
          </button>
        </div>

        <dialog id={`modal-${recipe._id}`} className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              <label>
                Recipe Title
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input w-full"
                  required
                />
              </label>
              <label>
                Cuisine Type
                <select
                  name="cuisineType"
                  value={formData.cuisineType}
                  onChange={handleChange}
                  className="select w-full"
                  required
                >
                  <option value="" disabled>
                    Select a Cuisine
                  </option>
                  {[
                    "Chinese",
                    "Korean",
                    "Italian",
                    "Indian",
                    "Mexican",
                    "Thai",
                    "Japanese",
                    "American",
                    "French",
                    "Mediterranean",
                  ].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Preparation Time
                <input
                  type="number"
                  name="preparationTime"
                  value={formData.preparationTime}
                  onChange={handleChange}
                  className="input w-full"
                  required
                />
              </label>
              <label>
                Image URL
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="input w-full"
                  required
                />
              </label>

              <div className="lg:col-span-2">
                <label>Categories</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {categoriesList.map((cat) => (
                    <label key={cat} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="categories"
                        value={cat}
                        checked={formData.categories.includes(cat)}
                        onChange={handleChange}
                        className="checkbox checkbox-sm"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2">
                <label>Ingredients</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {ingredientsList.map((ing) => (
                    <label key={ing} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="ingredients"
                        value={ing}
                        checked={formData.ingredients.includes(ing)}
                        onChange={handleChange}
                        className="checkbox checkbox-sm"
                      />
                      {ing}
                    </label>
                  ))}
                </div>
              </div>                                                                                     

              <label className="lg:col-span-2">
                Instructions
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  className="textarea w-full"
                  required
                />
              </label>

              <div className="lg:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="btn bg-[#A8F1FF] text-black mt-4"
                >
                  Update Recipe
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyRecipesItems;
