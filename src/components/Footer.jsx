import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#A8F1FF] text-primary-content p-10">
        <aside>
          <img
            className="bg-[#1ad7fd] w-10 h-10 shadow-4xl border-3 border-white rounded-4xl"
            src="https://static.thenounproject.com/png/2434646-200.png"
            alt="profile pic"
          />

          <p className="font-semibold font-mono text-xl text-[#000000]">
            Wander Recipe
            <br />
            <span className="font-normal text-sm text-[#000000]">
              Explore Tasty Recipes Daily
            </span>
          </p>
          <p className="text-sm text-[#000000]">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
