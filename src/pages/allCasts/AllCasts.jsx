import React, { useEffect, useState } from "react";
import castBg from "../../assets/media-assets/Cast/castBg.png";
import bannerLogo from "../../assets/media-assets/Logo.png";
import Chart1 from "../../assets/placeholder-images/1.jpg";
import castbg from "../../assets/placeholder-images/character.svg";
import starBg from "../../assets/media-assets/Cast/star.png";
import SingleCast from "../../components/singleCast/SingleCast";

const AllCasts = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${castBg})`,
        backgroundColor: "#191d29a0",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: 620,
        backgroundBlendMode: "screen",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${starBg})`,
          backgroundColor: "#191d29a0",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: 620,
          backgroundBlendMode: "screen",
        }}
      >
        {/* banner logo */}
        <div className="py-[58px]">
          <img src={bannerLogo} className="mx-auto w-[227px] h-[48px]" alt="" />
        </div>
        <div className="container  mx-auto md:max-w-7xl w-full px-6 md:px-0 pb-20">
          <h2 className="font-TTTravels text-[18px] md:text-[54px] font-[500] text-lightBlue mt-[20px] text-left ml-3">
            The Cast
          </h2>
          {/* display all casts here */}
          <div className="flex items-center justify-center flex-wrap">
            {characters.map((character) => (
              <div className="w-6/12 md:w-1/5">
                <div className="mx-4 my-3 md:my-0">
                  <SingleCast key={character.id} character={character} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCasts;
