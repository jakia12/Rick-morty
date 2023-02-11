import React from "react";
import Chart1 from "../../assets/placeholder-images/1.jpg";
import Chart2 from "../../assets/placeholder-images/2.jpg";
import Chart3 from "../../assets/placeholder-images/7.jpg";
import Chart4 from "../../assets/placeholder-images/8.jpg";
import Chart5 from "../../assets/placeholder-images/t2.jpg";
import Chart6 from "../../assets/placeholder-images/t3.jpg";
import Chart7 from "../../assets/placeholder-images/t5.jpg";
import border from "../../assets/placeholder-images/border.jpg";
import castbg from "../../assets/placeholder-images/character.svg";
import "./Cast.css";

const Cast = () => {
  return (
    <section className="py-[64px]">
      <div className=" container px-4 mx-auto max-w-7xl w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-[24] font-[500] capitalize font-TTTravels text-white">
            Meet the cast
          </h2>
          <button className="py-2 px-5 rounded-sm border border-lemon text-white text-[18px] font-[400] ">
            View All
          </button>
        </div>

        <div className="flex items-center flex-wrap">
          <div className="w-6/12 md:w-1/5">
            <div className="relative max-[235px] h-[268px] m-3">
              <img src={castbg} alt="" />
              <div className="absolute top-[19px] left-[27px] w-full h-full">
                <a href="#">
                  <img class="rounded max-w-[178px]" src={Chart1} alt="" />
                </a>
                <div className="pt-[16px]">
                  <h5 className="mb-2 text-[16px] font-[500] font-poppins text-left tracking-tight  text-white pb-5">
                    Noteworthy
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12 md:w-1/5">
            <div className="relative max-w-[235px] h-[268px] m-3">
              <img src={castbg} alt="" />
              <div className="absolute top-[19px] left-[27px] w-full h-full">
                <a href="#">
                  <img class="rounded max-w-[178px]" src={Chart1} alt="" />
                </a>
                <div className="pt-[16px]">
                  <h5 className="mb-2 text-[16px] font-[500] font-poppins text-left tracking-tight  text-white pb-5">
                    Noteworthy
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12 md:w-1/5">
            <div className="relative w-[235px] h-[268px] m-3">
              <img src={castbg} alt="" />
              <div className="absolute top-[19px] left-[27px] w-full h-full">
                <a href="#">
                  <img class="rounded w-[178px]" src={Chart1} alt="" />
                </a>
                <div className="pt-[16px]">
                  <h5 className="mb-2 text-[16px] font-[500] font-poppins text-left tracking-tight  text-white pb-5">
                    Noteworthy
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 md:w-1/5">
            <div className="relative w-[235px] h-[268px] m-3">
              <img src={castbg} alt="" />
              <div className="absolute top-[19px] left-[27px] w-full h-full">
                <a href="#">
                  <img class="rounded w-[178px]" src={Chart1} alt="" />
                </a>
                <div className="pt-[16px]">
                  <h5 className="mb-2 text-[16px] font-[500] font-poppins text-left tracking-tight  text-white pb-5">
                    Noteworthy
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/5 md:w-1/5">
            <div className="relative w-[235px] h-[268px] m-3">
              <img src={castbg} alt="" />
              <div className="absolute top-[19px] left-[27px] w-full h-full">
                <a href="#">
                  <img class="rounded w-[178px]" src={Chart1} alt="" />
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
      </div>
    </section>
  );
};

export default Cast;
