import React from "react";
import Carousel from "./Carousel";
import { companyLogos1, companyLogos2 } from "../constants/constant";

const Companies = () => {
  return (
    <div
      className="relative grid place-items-center w-[90%] overflow-hidden ml-[5%] mt-24"
      id="getStarted"
    >
      <Carousel images={companyLogos1} />
      <Carousel images={companyLogos2} />
    </div>
  );
};

export default Companies;
