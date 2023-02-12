import React from "react";
import detailsBg from "../../assets/media-assets/Cast Details/detailsBg.png";
import starBg from "../../assets/media-assets/Cast Details/Star.png";
import bannerLogo from "../../assets/media-assets/Logo.png";
import DivPerson from "../../assets/placeholder-images/2.jpg";
import { characterDetails } from "../../data/Placeholder";
import boxImage from "../../assets/media-assets/Cast Details/Icons/vector-svg/Status.svg";
import OriginImage from "../../assets/media-assets/Cast Details/Icons/vector-svg/Origin.svg";

import imageBox from "../../assets/media-assets/Cast Details/Icons/vector-svg/image.svg";

import "./CastDetails.css";

const CastDetails = () => {
  console.log(characterDetails);
  return (
    <section
      style={{
        backgroundImage: `url(${detailsBg})`,
        backgroundColor: "#191d2991",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: 550,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${starBg})`,
          backgroundColor: "#191d298e",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: 550,
        }}
      >
        {/* banner logo */}
        <div className="py-[58px]">
          <img src={bannerLogo} className="mx-auto w-[227px] h-[48px]" alt="" />
        </div>
        <div className="container  mx-auto max-w-6xl w-full px-11">
          <div className="md:flex justify-center flex-wrap">
            <div className="w-5/12 rounded-md flex justify-center items-center">
              <div>
                <h2 className="font-TTTravels text-[24px] md:text-[48px] mb-[15px] text-lightBlue font-[600] text-center">
                  Rick Martenz
                </h2>
                <div className="relative w-[240px] h-[240px] flex-shrink-0 md:flex-shrink md:w-[400px] md:h-[400px]">
                  <img
                    src={imageBox}
                    className="w-[240px] h-[240px]  md:w-[400px] md:h-[400px] "
                    alt=""
                  />
                  <img
                    src={DivPerson}
                    className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] absolute top-[13%] left-[13%] rounded-sm"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-7/12">
              {/* character info */}
              <div className="flex items-center md:ml-15 flex-nowrap">
                {characterDetails.map((characDetail) => (
                  <div
                    className="relative m-3 md:m-4 w-[104px] h-[75px] md:w-[240px] md:h-[174px] flex-shrink-0 md:flex-shrink"
                    key={characDetail.id}
                  >
                    <img
                      src={boxImage}
                      className="w-[104px] h-[75px] md:w-[240px] md:h-[174px] "
                      alt=""
                    />
                    <div className="absolute top-[18%] md:top-[19%]  left-[20%]">
                      <span className="w-[40px] h-[36.97px]">
                        <img
                          src={characDetail.icon}
                          className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                          alt=""
                        />
                      </span>
                      <p className="text-[12px] md:text-[14px] text-white font-TTTravels md:my-[4px]">
                        {characDetail.statusName}
                      </p>
                      <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                        {characDetail.statusValue}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              {/* more character info */}
              <div className="flex items-center">
                <div className="relative max-w-[348px] max-h-[75.69px]  md:w-full m-4 md:max-w-[800px] md:max-h-[174px]">
                  <img
                    src={OriginImage}
                    className="max-w-[348px] max-h-[75.69px] md:w-full md:max-w-[800px] md:max-h-[174px]"
                    alt=""
                  />
                  <div className="absolute top-[18%] md:top-[19%]  left-[20%]">
                    <span className="w-[40px] h-[36.97px]">
                      <img
                        src={characDetail.icon}
                        className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                        alt=""
                      />
                    </span>
                    <p className="text-[12px] md:text-[14px] text-white font-TTTravels md:my-[4px]">
                      {characDetail.statusName}
                    </p>
                    <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                      {characDetail.statusValue}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastDetails;
