import React from "react";
import detailsBg from "../../assets/media-assets/Cast Details/detailsBg.png";
import starBg from "../../assets/media-assets/Cast Details/Star.png";
import bannerLogo from "../../assets/media-assets/Logo.png";

const CastDetails = () => {
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
        <div className="py-[58px]">
          <img src={bannerLogo} className="mx-auto w-[227px] h-[48px]" alt="" />
        </div>
        <div className="container  mx-auto max-w-7xl w-full">
          <div className="flex items-center">
            <div className="w-5/12 rounded-md">
              <div class="border-gradient-rounded">Content</div>
            </div>
            <div className="w-7/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CastDetails;
