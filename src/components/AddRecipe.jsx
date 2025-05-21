import React from "react";

const AddRecipe = () => {
  //   const {
  //     title,
  //     image,
  //     cuisineType,
  //     preparationTime,
  //     likeCount,
  //     categories,
  //     ingredients,
  //     instructions,
  //   } = recipe;
  const handleSubmit = () => {
    console.log("hi");
  };
  return (
    <div className="my-8">
      <div
        className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl border-2 border-[#A8F1FF]"
        data-theme="light"
      >
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center my-3">
            Add New Recipe
          </h1>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            {/* Title */}
            <div>
              <label className="label">Recipe Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Your Recipe Title"
              />
            </div>

            {/* Cuisine Type */}
            <div>
              <label className="label">Cuisine Type</label>
              <select name="cuisineType" className="select w-full" required>
                <option value="" disabled>
                  Select a Cuisine
                </option>
                <option value="Chinese">Chinese</option>
                <option value="Korean">Korean</option>
                <option value="Italian">Italian</option>
                <option value="Indian">Indian</option>
                <option value="Mexican">Mexican</option>
                <option value="Thai">Thai</option>
                <option value="Japanese">Japanese</option>
                <option value="American">American</option>
                <option value="French">French</option>
                <option value="Mediterranean">Mediterranean</option>
              </select>
            </div>

            {/* Preparation Time */}
            <div>
              <label className="label">Preparation Time</label>
              <input
                type="number"
                name="preparationTime"
                className="input w-full"
                placeholder="How long does it take?"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="label">Image</label>
              <input
                type="text"
                name="image"
                className="input w-full"
                placeholder="Image URL"
              />
            </div>

            {/* Categories */}
            <div className="lg:col-span-2">
              <label className="label mt-4">Categories (Select Multiple)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
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
                ].map((cat, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="categories"
                      value={cat}
                      className="checkbox checkbox-sm"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="lg:col-span-2">
              <label className="label mt-4">
                Ingredients (Select Multiple)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
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
                ].map((ing, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="ingredients"
                      value={ing}
                      className="checkbox checkbox-sm"
                    />
                    {ing}
                  </label>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="lg:col-span-2">
              <label className="label shadow-2xl">Instructions</label>
              <textarea
                name="instructions"
                className="textarea w-full"
                placeholder="How to make the actual recipe?"
              ></textarea>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <button
                type="submit"
                className="btn bg-[#A8F1FF]  text-black mt-4 border-"
              >
                Add Recipe
              </button>
            </div>
          </form>

          {/* {error && (
              <p className="text-red-500  text-sm break-words whitespace-normal">
                {error}
              </p>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
