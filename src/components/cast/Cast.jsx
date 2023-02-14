import React, { useEffect, useState } from "react";
import Chart1 from "../../assets/placeholder-images/1.jpg";
import Chart2 from "../../assets/placeholder-images/2.jpg";
import Chart3 from "../../assets/placeholder-images/7.jpg";
import Chart4 from "../../assets/placeholder-images/8.jpg";
import Chart5 from "../../assets/placeholder-images/t2.jpg";
import Chart6 from "../../assets/placeholder-images/t3.jpg";
import Chart7 from "../../assets/placeholder-images/t5.jpg";
import border from "../../assets/placeholder-images/border.jpg";
import SingleCast from "../../components/singleCast/SingleCast";
import castbg from "../../assets/placeholder-images/character.svg";
import Slider from "react-slick";
import "./Cast.css";
import { Link } from "react-router-dom";

const Cast = () => {
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

  // slick slider settings
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    className: "innerMargin",

    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    // fade: true,
  };
  return (
    <section className="py-[64px]">
      <div className=" container px-6 md:px-0 mx-auto md:max-w-7xl w-full">
        <div className="flex items-center justify-between mb-1 mx-[25px]">
          <h2 className="text-[24] font-[500] capitalize font-TTTravels text-white ">
            Meet the cast
          </h2>
          <Link to="/allCasts">
            <button className="py-2 px-4 md:px-5 rounded-sm border border-lemon text-white text-[14px] md:text-[18px] font-[400] ">
              View All
            </button>
          </Link>
        </div>

        <Slider className="m-4" {...settings}>
          {characters.map((character) => (
            <div className="m-2">
              <div
                className="relative bg-image max-w-[92%] w-[200px] h-[200px]   md:w-[320px] md:h-[296px]  "
                style={{
                  backgroundImage: `url(${castbg})`,
                  backgroundPosition: "center center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* <img
        src={castbg}
        className="absolute top-0 left-0 w-full h-full object-contain"
        alt=""
      /> */}

                <div className="absolute top-[15%] left-[17%] md:left-[10%] ">
                  <a href="#">
                    <img
                      className="rounded max-w-[100%] w-[129px] h-[105px] md:w-[187px] md:h-[155px] overflow-hidden"
                      src={character.image}
                      alt=""
                    />
                  </a>
                  <div className="pt-[16px]">
                    <h5 className="mb-2 text-[15px] font-[400] font-poppins text-left tracking-tight  text-white pb-5">
                      {character.name}
                    </h5>
                  </div>
                </div>
              </div>
              {/* <SingleCast key={character.id} character={character} /> */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Cast;
