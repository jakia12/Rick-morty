import React from "react";

const AllCasts = () => {
  return (
    <section className="py-[64px]">
      <div className="container  mx-auto max-w-7xl w-full">
        <h2 className="font-TTTravels text-[64px] font-[600] text-lightBlue mt-[40px]">
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
    </section>
  );
};

export default AllCasts;
