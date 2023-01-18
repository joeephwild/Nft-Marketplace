import React, { useEffect, useState } from "react";
import { lilwayne, monekey, statue } from "../assets";
import { splitText } from "../hooks/TextSplit";

const HeroImage = () => {
  const [character, setCharacter] = useState([]);
  console.log(character)
  const words = () => {
    const text ='5000 AMAZING NFT SOLD ALL AROUND THE WORLD CREATIVITY IS NEVER LIMMITED YOU ARE THE LIMIT, NEVER CEASE TO BE CREATIVE IS POSSIBLE.'
    const text1 = 'IS NEVER LIMMITED YOU ARE THE LIMIT,'
    const text3 = ' NEVER CEASE TO BE CREATIVE IS POSSIBLE.'
    const word = text.split("");
    const word2 = text1.split('')
    setCharacter(word);
  };

  useEffect(() => {
    words();
  }, []);

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

  const text = [",", "", ""];
  return (
    <div>
      <div className="grid grid-cols-3 mt-6 items-center mb-6 w-full mx-auto justify-center">
        {images.map((item, i) => (
          <div key={i} className="relative">
            <img
              src={item.image}
              className="!lg:w-[990px]  hover:scale-95 h-[400px] lg:h-[350px] shadow-xl mx-auto object-cover  shadow-blue-500 rounded-2xl"
            />
            <span className="absolute lg:left-32 w-fit rounded-tl-2xl text-black bottom-0 bg-white text-xs font-bold font-Sora-Medium px-4 py-2 ">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImage;
