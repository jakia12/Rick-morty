import React from "react";
import detailsBg from "../../assets/media-assets/Cast Details/detailsBg.png";
import starBg from "../../assets/media-assets/Cast Details/Star.png";
import bannerLogo from "../../assets/media-assets/Logo.png";
import DivPerson from "../../assets/placeholder-images/2.jpg";
import { characterDetails } from "../../data/Placeholder";
import boxImage from "../../assets/media-assets/Cast Details/Icons/vector-svg/Status.svg";

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
        <div className="container  mx-auto max-w-6xl w-full">
          <div className="md:flex justify-center flex-wrap">
            <div className="w-5/12 rounded-md flex justify-center items-center">
              <div>
                <h2 className="font-TTTravels text-[48px] mb-[15px] text-lightBlue font-[600] text-center">
                  Rick Martenz
                </h2>
                <div className="relative border-r border-lemon">
                  <div class="border-gradient-rounded  max-w-[400px] max-h-[400px] md:w-[400px] md:h-[400px] "></div>
                  <img
                    src={DivPerson}
                    className="max-w-[300px] max-h-[300px] md:w-[300px] md:h-[300px] absolute top-[3.5rem] left-[5.5rem] rounded-sm"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-7/12">
              {/* character info */}
              <div className="flex items-center ml-15 flex-nowrap">
                {characterDetails.map((characDetail) => (
                  <div
                    className="relative m-4 w-[104px] h-[75px] md:w-[240px] md:h-[174px] flex-shrink-0 md:flex-shrink"
                    key={characDetail.id}
                  >
                    <img
                      src={boxImage}
                      className="w-[104px] h-[75px] md:w-[240px] md:h-[174px] "
                      alt=""
                    />
                    <div className="absolute top-[19%] left-[20%]">
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
                <div className="relative m-4">
                  <div className="more-info-box  w-full md:min-w-[668px]  h-[174px] "></div>
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
