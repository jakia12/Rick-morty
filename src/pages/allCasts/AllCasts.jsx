import React from "react";
import castBg from "../../assets/media-assets/Cast/castBg.png";
import bannerLogo from "../../assets/media-assets/Logo.png";
import Chart1 from "../../assets/placeholder-images/1.jpg";
import castbg from "../../assets/placeholder-images/character.svg";
import starBg from "../../assets/media-assets/Cast/star.png";

const AllCasts = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${castBg})`,
        backgroundColor: "#191d29a0",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: 550,
        backgroundBlendMode: "screen",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${starBg})`,
          backgroundColor: "#191d29a0",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: 550,
          backgroundBlendMode: "screen",
        }}
      >
        {/* banner logo */}
        <div className="py-[58px]">
          <img src={bannerLogo} className="mx-auto w-[227px] h-[48px]" alt="" />
        </div>
        <div className="container  mx-auto max-w-7xl w-full">
          <h2 className="font-TTTravels text-[54px] font-[500] text-lightBlue mt-[20px] text-left">
            The Cast
          </h2>
          {/* display all casts here */}
          <div className="relative max-w-[235px] md:w-[235px] h-[268px] m-3">
            <img src={castbg} alt="" />
            <div className="absolute top-[19px] left-[27px] w-full h-full">
              <a href="#">
                <img
                  class="rounded max-w-[178px] md:w-[178px]"
                  src={Chart1}
                  alt=""
                />
              </a>
              <div className="pt-[16px]">
                <h5 className="mb-2 text-[16px] font-[500] font-poppins text-left tracking-tight  text-white pb-5">
                  Noteworthy
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCasts;
