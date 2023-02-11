import React from "react";
import portal from "../../assets/media-assets/Home page/Hero Elements/portal.png";
import Gun from "../../assets/media-assets/Home page/Hero Elements/Gun.png";
import bubble from "../../assets/media-assets/Home page/Hero Elements/bubble.png";
import pill from "../../assets/media-assets/Home page/Hero Elements/pill.png";
import { BsPlayCircle } from "react-icons/bs";

const HeroBanner = () => {
  return (
    <>
      <div className="flex justify-center  relative">
        <h1 className="uppercase text-[40px] md:text-[128px] leading-[80px] font-TTTravels font-bold text-left">
          <span className="flex justify-center items-center ">
            <span className="text-white italic">The</span>
            <img src={portal} alt="" />
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-lemon to-lightBlue block py-5">
              Rick &
            </span>
          </span>
          <br />
          <span>
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-lemon to-lightBlue mr-6">
              morty
            </span>
            <span className="italic text-white">wiki</span>
          </span>
        </h1>

        {/* banner image positioning*/}
        <div className="absolute left-[7.5rem] top-[-86px]">
          <img src={bubble} className="w-[214.6px] h-[214.6px]" alt="" />
        </div>
        <div className="absolute right-[18%] top-0">
          <img src={pill} className="w-[50px] h-[10px]" alt="" />
        </div>
        <div className="absolute right-[12px] top-[75px]">
          <img src={Gun} className="w-[318.91px] h-[318.91px]" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center my-[39px]">
        <button className="py-2.5 font-TTTravels text-[17px] px-6 bg-gradient-to-r from-lemon to-lightBlue text-white flex items-center rounded-full">
          <span className="text-white mr-3">
            <BsPlayCircle />
          </span>
          Watch Now
        </button>

        <p className="text-[14px] text-lightBlue max-w-[364px] text-left ml-[89px]">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>
    </>
  );
};

export default HeroBanner;
