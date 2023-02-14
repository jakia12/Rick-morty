import React, { useEffect, useState } from "react";
import detailsBg from "../../assets/media-assets/Cast Details/detailsBg.png";
import starBg from "../../assets/media-assets/Cast Details/Star.png";
import bannerLogo from "../../assets/media-assets/Logo.png";
import DivPerson from "../../assets/placeholder-images/2.jpg";

import boxImage from "../../assets/media-assets/Cast Details/Icons/vector-svg/Status.svg";
import OriginImage from "../../assets/media-assets/Cast Details/Icons/vector-svg/Origin.svg";

import imageBox from "../../assets/media-assets/Cast Details/Icons/vector-svg/image.svg";
import episodesBox from "../../assets/media-assets/Cast Details/Icons/vector-svg/Episodes.svg";
import episodeIcon from "../../assets/media-assets/Cast Details/Icons/vector-svg/episode.svg";
import episodeText from "../../assets/media-assets/Cast Details/Icons/vector-svg/episodeIcon.svg";
import seperatorIcon from "../../assets/media-assets/Cast Details/Icons/vector-svg/seperator.svg";

import "./CastDetails.css";
import { getSingleCharacter } from "../../util/api";
import { useLoaderData } from "react-router-dom";
import heartIcon from "../../assets/media-assets/Cast Details/Icons/PNG/Status.png";

import speciesIcon from "../../assets/media-assets/Cast Details/Icons/PNG/Species.png";

import genderIcon from "../../assets/media-assets/Cast Details/Icons/PNG/Gender.png";

import LocationIcon from "../../assets/media-assets/Cast Details/Icons/PNG/Location.png";

import originIcon from "../../assets/media-assets/Cast Details/Icons/PNG/origin.png";

import RedirectIcon from "../../assets/media-assets/Cast Details/Icons/PNG/Redirect.png";

import { Link } from "react-router-dom";

const CastDetails = () => {
  //get loader data
  const characterData = useLoaderData();

  //destructure all data from the characterData
  const { id, name, image, species, status, gender, origin, location } =
    characterData;

  //push episode data in episodes array
  const [episodes, setEpisodes] = useState([]);

  //get episode data
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setEpisodes(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(characterData);
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
        <div className="pt-[58px] pb-[40px] md:py-[58px]">
          <Link to="/">
            <img
              src={bannerLogo}
              className="mx-auto w-[227px] h-[48px]"
              alt=""
            />
          </Link>
        </div>
        <div className="container  mx-auto max-w-7xl w-full px-11 pb-3 md:pb-8">
          <div className="md:flex justify-center items-center flex-wrap">
            <div className="w-4/12 rounded-md flex justify-center items-center mx-auto md:mx-0">
              <div className="mb-3 md:mt-0">
                <h2 className="font-TTTravels text-[24px] md:text-[48px] mb-[15px] text-lightBlue font-[600] text-center">
                  {name}
                </h2>
                <div className="relative w-[240px] h-[240px] flex-shrink-0 max-w-[100%] md:flex-shrink md:w-[400px] md:h-[400px]">
                  <img
                    src={imageBox}
                    className="absolute top-0 left-0 w-full h-full"
                    alt=""
                  />
                  <img
                    src={image}
                    className="w-[180px] h-[180px] max-w-[100%] md:w-[300px] md:h-[300px] absolute top-[11%] left-[12%] rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-2/12 hidden md:flex justify-center items-center">
              <img src={seperatorIcon} alt="" />
            </div>
            <div className="w-6/12 ">
              <div className="md:ml-15 ml-0 ">
                {/* character info */}
                <div className="flex items-center  flex-nowrap">
                  <div className="relative m-2  md:m-4 w-[104px] h-[75px] md:w-[240px] md:h-[174px] flex-shrink-0 md:flex-shrink">
                    <img
                      src={boxImage}
                      className="w-[110px] h-[90px] max-w-[100%] md:w-[240px] md:h-[174px] "
                      alt=""
                    />
                    <div className="absolute top-[18%] md:top-[19%]  left-[20%]">
                      <span>
                        <img
                          src={heartIcon}
                          className="w-[20px] h-[20px] max-w-[100%] md:w-[48px] md:h-[48px] mb-1"
                          alt=""
                        />
                      </span>
                      <p className="text-[12px] md:text-[14px] text-white font-TTTravels md:my-[4px]">
                        Status
                      </p>
                      <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                        {status}
                      </h3>
                    </div>
                  </div>
                  <div className="relative m-2  md:m-4 w-[104px] h-[75px] md:w-[240px] md:h-[174px] flex-shrink-0 md:flex-shrink">
                    <img
                      src={boxImage}
                      className="w-[110px] h-[90px] max-w-[100%] md:w-[240px] md:h-[174px] "
                      alt=""
                    />
                    <div className="absolute top-[18%] md:top-[19%]  left-[20%]">
                      <span className="w-[40px] h-[36.97px]">
                        <img
                          src={speciesIcon}
                          className="w-[20px] h-[20px] max-w-[100%] md:w-[48px] md:h-[48px] mb-1"
                          alt=""
                        />
                      </span>
                      <p className="text-[12px] md:text-[14px] text-white font-TTTravels md:my-[4px]">
                        Species
                      </p>
                      <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                        {species}
                      </h3>
                    </div>
                  </div>
                  <div className="relative m-2  md:m-4 w-[104px] h-[75px] md:w-[240px] md:h-[174px] flex-shrink-0 md:flex-shrink">
                    <img
                      src={boxImage}
                      className="w-[110px] h-[90px] max-w-[100%] md:w-[240px] md:h-[174px] "
                      alt=""
                    />
                    <div className="absolute top-[18%] md:top-[19%]  left-[20%]">
                      <span className="w-[40px] h-[36.97px]">
                        <img
                          src={genderIcon}
                          className="w-[20px] h-[20px] max-w-[100%] md:w-[48px] md:h-[48px] mb-1"
                          alt=""
                        />
                      </span>
                      <p className="text-[12px] md:text-[14px] text-white font-TTTravels md:my-[4px]">
                        Gender
                      </p>
                      <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                        {gender}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* more character info  about origin and location*/}

                <div className="relative max-w-[348px] max-h-[75.69px]  md:w-[100%] my-4 mx-2 pb-[10px] md:max-w-[800px] md:max-h-[174px] ">
                  <img
                    src={OriginImage}
                    className="max-w-[348px] max-h-[75.69px] md:w-full md:max-w-[800px] md:max-h-[174px]"
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-full h-full text-left px-[32px] py-[11px]">
                    <span className="w-[40px] h-[36.97px]">
                      <img
                        src={originIcon}
                        className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                        alt=""
                      />
                    </span>

                    <p className="text-[12px] md:text-[14px] text-white font-TTTravels my-[2px] md:my-[4px] ">
                      Origin
                    </p>

                    <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                      {origin.name}
                    </h3>
                  </div>
                  {/* redirect icon */}
                  <span className="text-white absolute right-[-64%] md:right-[5%] top-[60%]">
                    <img
                      src={RedirectIcon}
                      className="w-[14px] h-[14px] md:w-[32px] md:h-[32px]"
                      alt=""
                    />
                  </span>
                </div>
                <div className="relative max-w-[348px] max-h-[75.69px]  md:w-full my-4 mx-2  pb-[10px] md:max-w-[800px] md:max-h-[174px]">
                  <img
                    src={OriginImage}
                    className="max-w-[348px] max-h-[75.69px] md:w-full md:max-w-[800px] md:max-h-[174px]"
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-full h-full text-left px-[32px] py-[11px]">
                    <span className="w-[40px] h-[36.97px]">
                      <img
                        src={LocationIcon}
                        className="w-[20px] h-[20px] md:w-[48px] md:h-[48px]"
                        alt=""
                      />
                    </span>

                    <p className="text-[12px] md:text-[14px] text-white font-TTTravels my-[2px] md:my-[4px] ">
                      Last Known Location
                    </p>

                    <h3 className="text-[14px] md:text-[18px] font-TTTravels text-white">
                      {location.name}
                    </h3>
                    {/* redirect icon */}
                    <span className="text-white absolute right-[-64%] md:right-[5%] top-[60%] overflow-hidden">
                      <img
                        src={RedirectIcon}
                        className="w-[14px] h-[14px] md:w-[32px] md:h-[32px]"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                {/* episodes info */}
                <div
                  className="relative w-[348px] h-[250px]  pb-[10px] md:w-full md:max-w-[800px] md:min-h-[417px] gradient border-r-[1px] border-r-[#9dfe0092] border-l-[1px] border-l-[#14dbe5a6] rounded-md my-4 mx-2  mb-20 "
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
                      <ul className="mt-3">
                        {episodes.map((episode) => (
                          <li className="text-[17px] md:text-[30px] font-TTTravels text-white font-[600] list-disc my-2 ml-5">
                            {episode.name}
                          </li>
                        ))}
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

//export the loader from here
export const loader = ({ params }) => {
  const uId = params.castId;

  return getSingleCharacter(uId);
};
export default CastDetails;
