import React from "react";

const Accordion = () => {
  return (
    <div className="space-y-5 w-9/12 mx-auto">
      <div className="collapse collapse-arrow  text-[#d6dce6] bg-[#0F1728] border border-[#b9f8d4]">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold text-xl">
          How do I submit my own recipe?
        </div>
        <div className="collapse-content text-sm text-[#cce1d5]">
          You can click on the “Add Recipes” button, fill in the recipe form
          with details like ingredients, instructions, and an image, then click
          submit to share it with the community.
        </div>
      </div>
      <div className="collapse collapse-arrow text-[#d6dce6] bg-[#0F1728] border border-[#b9f8d4]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-xl">
          Are the recipes reviewed before being published?
        </div>
        <div className="collapse-content text-sm text-[#cce1d5]">
          Yes, all submitted recipes are reviewed by our team to ensure they
          meet community guidelines and include complete, accurate instructions
          before they go live.
        </div>
      </div>
      <div className="collapse collapse-arrow text-[#d6dce6] bg-[#0F1728] border border-[#b9f8d4]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-xl">
          How are the top recipes selected?
        </div>
        <div className="collapse-content text-sm text-[#cce1d5]">
          Top recipes are selected based on number of likes.
        </div>
      </div>
      <div className="collapse collapse-arrow text-[#d6dce6] bg-[#0F1728] border border-[#b9f8d4]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-xl">
          Can I edit or delete a recipe I submitted?
        </div>
        <div className="collapse-content text-sm text-[#cce1d5]">
          Yes, if you're logged in, go to your profile, find your submitted
          recipes, and you'll see options to edit or remove them as needed.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
