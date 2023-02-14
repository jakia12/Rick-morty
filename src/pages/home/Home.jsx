import React, { useEffect, useState } from "react";
import bannerBg from "../../assets/media-assets/Home page/Background  Elements/bg.png";
import spiralBg from "../../assets/media-assets/Home page/Background  Elements/spiral-sm.png";
import bannerLogo from "../../assets/media-assets/Logo.png";
import Cast from "../../components/cast/Cast";
import Episodes from "../../components/episodes/Episodes";
import HeroBanner from "../../components/heroSection/HeroBanner";
import starBg from "../../assets/media-assets/Home page/Background  Elements/star.png";
import Locations from "../../components/locations/Locations";

const Home = () => {
  return (
    <>
      <header
        className="relative"
        style={{
          backgroundImage: `url(${bannerBg})`,
          backgroundColor: "#191d29a0",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          minHeight: 550,
          backgroundBlendMode: "screen",
        }}
      >
        <div
          style={{
            backgroundColor: "#191d29a0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: 550,
            backgroundBlendMode: "screen",
          }}
        >
          {/* banner logo */}
          <div className="pt-[58px] ">
            <img
              src={bannerLogo}
              className="mx-auto w-[227px] h-[48px]"
              alt=""
            />
          </div>

          {/* hero section */}
          <HeroBanner />

          {/* cast section */}
          <Cast />
        </div>
      </header>

      <section
        className="z-10 relative"
        style={{
          backgroundImage: `url(${starBg})`,
          backgroundColor: "#191d29a0",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: 300,
          backgroundBlendMode: "screen",
        }}
      >
        <div
          style={{
            backgroundColor: "#191d29a0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: 300,
            backgroundBlendMode: "screen",
          }}
        >
          {/* episode section and location section */}
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
            <div className="container  mx-auto md:max-w-7xl w-full px-4 md:px-0">
              {/* episode section */}
              <Episodes />
              {/* location section */}
              <Locations />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
