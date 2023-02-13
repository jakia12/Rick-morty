import React, { useEffect, useState } from "react";
import Chart1 from "../../assets/placeholder-images/1.jpg";
import Chart2 from "../../assets/placeholder-images/2.jpg";
import Chart3 from "../../assets/placeholder-images/7.jpg";
import Chart4 from "../../assets/placeholder-images/8.jpg";
import Chart5 from "../../assets/placeholder-images/t2.jpg";
import Chart6 from "../../assets/placeholder-images/t3.jpg";
import Chart7 from "../../assets/placeholder-images/t5.jpg";
import border from "../../assets/placeholder-images/border.jpg";
import castbg from "../../assets/placeholder-images/character.svg";
import Slider from "react-slick";
import "./Cast.css";

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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,

    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
      <div className=" container px-4 mx-auto max-w-7xl w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[24] font-[500] capitalize font-TTTravels text-white">
            Meet the cast
          </h2>
          <button className="py-2 px-5 rounded-sm border border-lemon text-white text-[18px] font-[400] ">
            View All
          </button>
        </div>

        <Slider {...settings}>
          {characters.map((character) => (
            <div
              className="relative max-w-[235px] md:w-[235px] h-[268px] m-3"
              key={character.id}
            >
              <img src={castbg} alt="" />
              <div className="absolute top-[19px] left-[27px] w-full h-full">
                <a href="#">
                  <img
                    class="rounded max-w-[178px] md:w-[178px]"
                    src={character.image}
                    alt=""
                  />
                </a>
                <div className="pt-[16px]">
                  <h5 className="mb-2 text-[16px] font-[500] font-poppins text-left tracking-tight  text-white pb-5">
                    {character.name}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Cast;
