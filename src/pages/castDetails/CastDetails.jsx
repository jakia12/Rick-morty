import React from "react";
import detailsBg from "../../assets/media-assets/Cast Details/detailsBg.png";
import starBg from "../../assets/media-assets/Cast Details/Star.png";
import bannerLogo from "../../assets/media-assets/Logo.png";
import DivPerson from "../../assets/placeholder-images/2.jpg";
import { characterDetails, moreInfos } from "../../data/Placeholder";
import boxImage from "../../assets/media-assets/Cast Details/Icons/vector-svg/Status.svg";
import OriginImage from "../../assets/media-assets/Cast Details/Icons/vector-svg/Origin.svg";

import imageBox from "../../assets/media-assets/Cast Details/Icons/vector-svg/image.svg";
import episodesBox from "../../assets/media-assets/Cast Details/Icons/vector-svg/Episodes.svg";
import episodeIcon from "../../assets/media-assets/Cast Details/Icons/vector-svg/episode.svg";
import episodeText from "../../assets/media-assets/Cast Details/Icons/vector-svg/episodeIcon.svg";

import "./CastDetails.css";

const CastDetails = () => {
  console.log(characterDetails);
  return (
    <section
      className="pb-20"
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
              <div className="ml-15">
                {/* character info */}
                <div className="flex items-center flex-nowrap">
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
                {moreInfos.map((moreinfo) => (
                  <div className="relative max-w-[348px] max-h-[75.69px]  md:w-full m-4 pb-[10px] md:max-w-[800px] md:max-h-[174px]">
                    <img
                      src={OriginImage}
                      className="max-w-[348px] max-h-[75.69px] md:w-full md:max-w-[800px] md:max-h-[174px]"
                      alt=""
                    />
                    <div className="absolute top-[9%] md:top-[9%] left-[10%]  md:left-[4%] text-left">
                      <span className="w-[40px] h-[36.97px]">
                        <img
                          src={moreinfo.icon}
                          className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                          alt=""
                        />
                      </span>

                      <p className="text-[12px] md:text-[14px] text-white font-TTTravels my-[2px] md:my-[4px] ">
                        {moreinfo.title}
                      </p>

                      <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                        {moreinfo.subTitle}
                      </h3>
                    </div>
                    {/* redirect icon */}
                    <span className="text-white absolute right-[-64%] md:right-[5%] top-[60%]">
                      <img
                        src={moreinfo.redirectIcon}
                        className="w-[14px] h-[14px] md:w-[32px] md:h-[32px]"
                        alt=""
                      />
                    </span>
                  </div>
                ))}

                {/* episodes info */}
                <div
                  className="relative w-[348px] h-[250px]  pb-[10px] md:w-full md:max-w-[800px] md:min-h-[417px] gradient border-r-[1px] border-r-[#9dfe0092] border-l-[1px] border-l-[#14dbe5a6] rounded-md mx-4 mb-20 "
                  style={{
                    backgroundImage: `url(${episodesBox})`,

                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    maxWidth: 800,

                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* <img
                  src={episodesBox}
                  className="absolute top-0 left-0 w-full h-full"
                  alt=""
                /> */}
                  {/* top-[9%] md:top-[9%] left-[10%]  md:left-[9%]  */}
                  <div className="absolute text-left w-full h-full top-0 left-0">
                    <div
                      id="custom-scrollbar"
                      className="p-8 w-full h-full overflow-y-scroll "
                    >
                      <span>
                        <img
                          src={episodeIcon}
                          className="w-[20px] h-[20px] md:w-[40px] md:h-[30px]"
                          alt=""
                        />
                      </span>
                      <span className="mt-4 block">
                        <img
                          src={episodeText}
                          className="w-[115px] h-[24px] "
                          alt=""
                        />
                      </span>
                      <ul>
                        <li>Rick Potion #9</li>
                        <li>Raising Gazorpazorp</li>
                        <li>Rixty Minutes</li>
                        <li>Something Ricked This Way Comes</li>
                        <li>Close Rick-counters of the Rick</li>
                        <li>Rick Potion #9</li>
                        <li>Raising Gazorpazorp</li>
                        <li>Rixty Minutes</li>
                        <li>Something Ricked This Way Comes</li>
                        <li>Close Rick-counters of the Rick</li>
                        <li>Rick Potion #9</li>
                        <li>Raising Gazorpazorp</li>
                        <li>Rixty Minutes</li>
                        <li>Something Ricked This Way Comes</li>
                        <li>Close Rick-counters of the Rick</li>
                      </ul>
                    </div>
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
