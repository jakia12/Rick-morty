import React from "react";
import portal from "../../assets/media-assets/Home page/Hero Elements/portal.png";
import Gun from "../../assets/media-assets/Home page/Hero Elements/Gun.png";
import bubble from "../../assets/media-assets/Home page/Hero Elements/bubble.png";
import pill from "../../assets/media-assets/Home page/Hero Elements/pill.png";
import { BsPlayCircle } from "react-icons/bs";

const HeroBanner = () => {
  return (
    <div className="px-10 md:px-0">
      <div className="flex md:justify-center  relative">
        <h1 className="uppercase text-[40px] md:text-[128px] leading-none md:leading-[80px] font-TTTravels font-bold text-left">
          <span className="flex justify-center items-center ">
            <span className="text-white italic ">The</span>
            <img
              src={portal}
              className="w-[68.62px] h-[44.22px] max-w-[100%] md:w-[225px] md:h-[145px] mx-4"
              alt=""
            />
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-lemon to-lightBlue block py-5">
              Rick &
            </span>
          </span>
          <br className="hidden md:block" />
          <span>
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-lemon to-lightBlue mr-6">
              morty
            </span>
            <span className="italic text-white">wiki</span>
          </span>
        </h1>

        {/* banner image positioning*/}
        <div className="absolute left-[-5%] md:left-[8%] top-[-6%] md:top-[-32%]">
          <img
            src={bubble}
            className="w-[52.4px] h-[52.4px] max-w-[100%] md:w-[216.6px] md:h-[214.6px]"
            alt=""
          />
        </div>
        <div className="absolute right-[18%] top-0">
          <img
            src={pill}
            className="w-[50px] h-[10px] hidden md:block"
            alt=""
          />
        </div>
        <div className="absolute right-[0] top-[18%]">
          <img
            src={Gun}
            className="w-[119.13px] h-[124.01px] max-w-[100%] md:w-[318.91px] md:h-[318.91px]"
            alt=""
          />
        </div>
      </div>

      <div className="flex md:items-center md:justify-center md:flex-row  flex-col-reverse my-[29px] md:my-[39px] text-left">
        <button className="py-2.5 font-TTTravels text-[17px] px-6 bg-gradient-to-r from-lemon to-lightBlue text-white md:flex items-center rounded-full hidden">
          <span className="text-white mr-3">
            <BsPlayCircle />
          </span>
          Watch Now
        </button>

        <p className="text-[14px] text-lightBlue md:max-w-[364px] text-left md:ml-12 ">
          Brilliant but boozy scientist Rick hijacks his fretful teenage
          grandson, Morty, for wild escapades in other worlds and alternate
          dimensions.
        </p>
      </div>
      <div className="text-left block md:hidden">
        <button className="md:py-2.5 py-2 font-TTTravels text-[15px] md:text-[17px] md:px-6 px-5 bg-gradient-to-r from-lemon to-lightBlue text-white flex items-center rounded-full">
          <span className="text-white mr-3">
            <BsPlayCircle />
          </span>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
