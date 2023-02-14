import React from "react";
import castbg from "../../assets/placeholder-images/character.svg";
import "./SingleCast.css";

const SingleCast = ({ character }) => {
  return (
    <div
      className="relative bg-image max-w-[104%] w-[200px] h-[200px]   md:w-[320px] md:h-[296px] pointer "
      style={{
        backgroundImage: `url(${castbg})`,
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img
        src={castbg}
        className="absolute top-0 left-0 w-full h-full object-contain"
        alt=""
      /> */}

      <div className="absolute top-[15%] left-[17%] md:left-[10%] ">
        <Link to={`/characters/${character.id}`}>
          <img
            className="rounded max-w-[100%] w-[129px] h-[105px] md:w-[187px] md:h-[155px] overflow-hidden pointer"
            src={character.image}
            alt=""
          />
        </Link>

        <div className="pt-[16px]">
          <h5 className="mb-2 text-[15px] font-[400] font-poppins text-left tracking-tight  text-white pb-5">
            {character.name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SingleCast;
