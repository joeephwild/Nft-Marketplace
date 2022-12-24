import React from "react";
import { eth } from "../assets";

const Header = () => {
  return (
    <nav className="w-full px-4 flex  justify-between items-center py-4 mx-auto">
      <div className="flex mr-4 items-center">
        <img
          src={eth}
          alt="logo"
          className="w-36 object-contain  cursor-pointer"
        />
        {/** links */}
        <ul className="hidden cursor-pointer md:flex ml-6 space-x-11 items-center text-xs font-Sora-Medium font-bold flex-row list-none ">
          <li>Explore</li>
          <li>Feature</li>
          <li>Discover</li>
          <li>Latest</li>
          <li>Faq</li>
        </ul>
      </div>
      <button className="bg-blue-700 px-3 py-2 text-white text-sm font-bold rounded-lg">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Header;
