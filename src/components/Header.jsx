import React from "react";
import { eth } from "../assets";
import { RxAvatar } from "react-icons/rx";
import { BiWalletAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const address = "hhhhh";

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
        <ul className="hidden cursor-pointer md:flex ml-6 space-x-11 items-center text-sm font-Sora-Medium font-bold flex-row list-none ">
          <li>Explore</li>
          <li>Drops</li>
          <li>Discover</li>
          <li>Latest</li>
          <li>Create</li>
        </ul>
      </div>
      {/** if address is null it renders the connect wallet  */}
      {!address && (
        <button className="bg-blue-700 px-3 py-2 text-white text-sm font-bold rounded-lg">
          Connect Wallet
        </button>
      )}
      {/** if address exist it renders the profile */}
      {address && (
        <div className="flex space-x-4 items-center">
          <div className="-full p-2 text-white">
            <RxAvatar size={30} />
          </div>
          <BiWalletAlt size={30} />
          <AiOutlineShoppingCart size={30} />
        </div>
      )}
    </nav>
  );
};

export default Header;
