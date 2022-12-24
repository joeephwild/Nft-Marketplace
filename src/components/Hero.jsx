import React from "react";
import HeroImage from "./HeroImage";

const Hero = () => {
  const title = ["D", "I", "S", "C", "O", "V", "E", "R"];
  const title2 = ["A", "M", "A", "Z", "I", "N", "G"];
  const title3 = ["C", "R", "E", "A", "T", "I", "V", 'I', 'T', 'Y'];
  return (
    <div>
      <section className="w-full items-center justify-center">
        <div className="flex items-center justify-center">
          {title.map((text, i) => (
            <div className="flip-on-hover font-Glusp font-black sm:text-6xl text-[43px] md:text-[78px] lg:text-8xl">{text}</div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {title2.map((text, i) => (
            <div className="flip-on-hover font-Glusp font-black sm:text-6xl text-[43px] md:text-[78px] lg:text-8xl">{text}</div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {title3.map((text, i) => (
            <div className="flip-on-hover font-Glusp font-black sm:text-6xl text-[43px] md:text-[78px] lg:text-8xl">{text}</div>
          ))}
        </div>
        <span className="font-Sora-ExtraLight text-sm items-center flex justify-center text-center">The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items</span>
      </section>
      <HeroImage />
    </div>
  );
};

export default Hero;
