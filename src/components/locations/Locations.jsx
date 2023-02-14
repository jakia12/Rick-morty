import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import substract from "../../assets/placeholder-images/substract.svg";
const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(" https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setLocations(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
    <div className="container  mx-auto max-w-7xl w-full">
      <h2 className="text-[24] font-[500] capitalize font-TTTravels text-white text-left">
        Episodes
      </h2>
      <Slider {...settings}>
        {locations.map((location) => (
          <div
            className="relative max-w-[330px] md:w-[330px] h-[96px] p-5 "
            key={location.id}
          >
            <img src={substract} className="" alt="" />
            <div className="absolute top-[40px] left-[50px] w-full h-full  text-left">
              <span className="text-[13px] text-white font-TTTravels capitalize">
                #{location.id}
              </span>
              <h3 className="text-white font-TTTravels text-[16px] capitalize">
                {location.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Locations;
