import React from "react";
import { Carousel } from "react-responsive-carousel";
import { team } from "../constants/constant";
import TeamCard from "../components/TeamCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Team = () => {
  return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="px-3 py-10 sm:px-20 md:px-28 lg:px-16 xl:px-20"
      >
        {team.map((data, index) => (
          <TeamCard data={data} key={index} />
        ))}
      </Carousel>
  );
};

export default Team;
