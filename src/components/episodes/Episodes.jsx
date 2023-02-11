import React from "react";
import spiralBg from "../../assets/media-assets/Home page/Background  Elements/spiral-sm.png";
import substract from "../../assets/placeholder-images/substract.svg";
import Slider from "react-slick";

const Episodes = () => {
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
    <section
      style={{
        backgroundImage: `url(${spiralBg})`,
        backgroundPosition: "right",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "screen",
        minHeight: 314,
      }}
    >
      <div className="container  mx-auto max-w-7xl w-full">
        <h2 className="text-[24] font-[500] capitalize font-TTTravels text-white text-left">
          Episodes
        </h2>
        <Slider {...settings}>
          <div className="relative max-w-[340px] md:w-[340px] h-[96px] m-3">
            <img src={substract} alt="" />
            <div className="absolute top-[13px] left-[24px] w-full h-full  text-left">
              <span className="text-[13px] text-white font-TTTravels capitalize">
                s1254
              </span>
              <h3 className="text-white font-TTTravels text-[16px] capitalize">
                Pilot
              </h3>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Episodes;
