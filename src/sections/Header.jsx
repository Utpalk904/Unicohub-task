import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="h-[100svh]">
      <Navbar />
      <div className="lg:flex lg:flex-row-reverse h-[88%] lg:justify-center lg:items-center lg:px-10 xl:px-20 lg:gap-4 xl:gap-10">
        <div className="flex justify-center items-center">
          <img src="/header.png" alt="header" className="h-[280px] lg:w-[450px] lg:h-auto" />
        </div>
        <div className="lg:flex lg:flex-col lg:gap-6">
          <div className="mt-4 lg:mt-0 lg:flex lg:flex-col">
            <Heading text="AI Marketing." gradient={true} />
            <Heading text="Optimized Reach." styles="text-3xl sm:text-[39px]" />
          </div>
          <div className="px-5 sm:px-10 md:px-52 text-center lg:text-left lg:px-0 lg:pr-6 xl:w-[75%] mt-2 lg:mt-0">
            Our vision is to revolutionize the way brands and advertisers
            target, reach
          </div>
          <hr className="bg-gradient-to-r from-[rgba(255,45,247,1)] via-[rgba(82,0,255,1)] to-[rgba(0,240,255,1)] lg:hidden md:w-1/2 mx-auto my-5 h-[2px] w-[70%]" />
          <div className="w-[80%] md:w-[50%] mx-auto lg:mx-0 lg:w-1/2 xl:w-[30%] mb-2">
            <Button text="Get Started" icon={true} link="#getStarted"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
