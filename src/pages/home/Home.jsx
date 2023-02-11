import React from "react";
import bannerBg from "../../assets/media-assets/Home page/Background  Elements/bg.png";

import bannerLogo from "../../assets/media-assets/Logo.png";
import Cast from "../../components/cast/Cast";
import HeroBanner from "../../components/heroSection/HeroBanner";

const Home = () => {
  return (
    <header
      className="relative"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundColor: "#191d29a0",
        backgroundPosition: "center center",
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

      {/* hero section */}
      <HeroBanner />

      {/* cast section */}
      <Cast />
    </header>
  );
};

export default Home;
