import React from "react";

const TeamCard = ({ data }) => {
  return (
    <div className="flex flex-col text-white bg-gradient-to-r from-[rgba(255,45,247,1)] via-[rgba(82,0,255,1)] to-[rgba(0,240,255,1)] py-14 px-12 sm:px-20 md:px-24 xl:px-28 lg:py-10 xl:py-16 lg:px-10 lg:flex-row lg:justify-center lg:items-centers lg:gap-10 xl:gap-14 lg:bg-[#171717] lg:bg-none rounded-[20px]">
      <div className="lg:w-[30%] xl:w-[25%] lg:flex lg:justify-center lg:items-center">
        <div>
          <img
            src={data.team}
            alt={data.name}
            className="max-w-[230px] w-full sm:max-w-[250px] lg:w-full lg:max-w-[300px]"
          />
        </div>
      </div>
      <div className="lg:w-[70%] xl:w-[70%] lg:flex lg:flex-col lg:justify-center lg:items-start">
        <div className="mt-6 lg:mt-0 sm:mt-10 text-left lg:text-[15px] xl:text-base">{data.detail}</div>
        <div className="font-semibold text-xl lg:text-lg xl:text-xl mt-6 lg:mt-3 sm:mt-10 xl:mt-8 mb-1 xl:mb-2 lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-br from-[rgba(255,45,247,1)] via-[rgba(82,0,255,1)] to-[rgba(0,240,255,1)]">
          {data.name}
        </div>
        <div className=" lg:text-[15px] xl:mb-2">{data.title}</div>
        <div>
          <img
            src={data.social}
            alt="social"
            className="max-w-[120px] w-full lg:max-w-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
