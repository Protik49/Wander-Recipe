import React from "react";
import { FaFacebook, FaReddit, FaTelegram } from "react-icons/fa";


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

          {/* Social Icons */}

          <div className=" flex gap-5">
            <a
              href="https://www.reddit.com"
              target="_blank"
              className="border-2 border-white rounded-4xl"
            >
              <FaReddit size={25} fill={"#1ad7fd"} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              className="border-2 border-white rounded-4xl"
            > 
              <FaFacebook size={25} fill={"#1ad7fd"} />
            </a>

            <a
              href="https://telegram.org/"
              target="_blank"
              className="border-2 border-white rounded-4xl"
            >
              <FaTelegram size={25} fill={"#1ad7fd"} />
            </a>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
