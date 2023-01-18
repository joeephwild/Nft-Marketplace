import React from "react";
import HeroImage from "./HeroImage";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const title = ["D", "I", "S", "C", "O", "V", "E", "R"];
  const title2 = ["A", "M", "A", "Z", "I", "N", "G"];
  const title3 = ["C", "R", "E", "A", "T", "I", "V", "I", "T", "Y"];
  return (
    <div>
      <section className="w-full items-center justify-center">
        <div className="flex items-center justify-center">
          {title.map((text, i) => (
            <div className="flip-on-hover font-Glusp font-black sm:text-6xl text-[43px] md:text-[78px] lg:text-8xl">
              {text}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {title2.map((text, i) => (
            <div className="flip-on-hover font-Glusp font-black sm:text-6xl text-[43px] md:text-[78px] lg:text-8xl">
              {text}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {title3.map((text, i) => (
            <div
              key={i}
              className="flip-on-hover font-Glusp font-black sm:text-6xl text-[43px] md:text-[78px] lg:text-8xl"
            >
              {text}
            </div>
          ))}
        </div>
        <span className="font-Sora-ExtraLight text-sm items-center flex justify-center text-center">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items
        </span>
      </section>
      <div className="w-[80%] flex items-center space-x-2 font-Sora-ExtraLight px- border-4 text-black border-blue-500 rounded-lg bg-white my-3 mx-auto">
        <div className="bg-blue-500 cursor-pointer px-4  py-2 h-full">
          <AiOutlineSearch size={30} />
        </div>
        <input
          placeholder="Search Items, Collections, Accounts"
          type="text"
          className="border-none bg-transparent placeholder:text-xs placeholder:text-black outline-none text-black w-full"
        />
      </div>
      <HeroImage />
    </div>
  );
};

export default Hero;
