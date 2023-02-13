import React, { useEffect, useState } from "react";
import bannerBg from "../../assets/media-assets/Home page/Background  Elements/bg.png";

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
          <div className="py-[58px]">
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
          minHeight: 450,
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
          {/* episode section */}
          <Episodes />

          {/* location section */}
          <Locations />
        </div>
      </section>
    </>
  );
};

export default Home;
