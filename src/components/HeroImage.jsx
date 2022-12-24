import React from "react";
import { lilwayne, monekey, statue } from "../assets";

const HeroImage = () => {
  const images = [
    {
      image: lilwayne,
      price: "1.5 eth",
    },
    {
      image: monekey,
      price: "3.0 eth",
    },
    {
      image: statue,
      price: "2.5 eth",
    },
  ];
  return (
    <div className="grid grid-cols-3 mt-6 items-center mb-6 w-full mx-auto justify-center">
      {images.map((item, i) => (
        <div className="relative">
          <img
            src={item.image}
            className="!lg:w-[990px]  hover:scale-95 h-[400px] lg:h-[350px] shadow-2xl mx-auto object-cover  shadow-blue-500 rounded-2xl"
          />
          <span className="absolute lg:left-32 w-fit rounded-tl-2xl text-black bottom-0 bg-white text-xs font-bold font-Sora-Medium px-4 py-2 ">{item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroImage;
