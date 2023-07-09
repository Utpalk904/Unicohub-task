import React from "react";
import { Typography } from "@material-tailwind/react";

const Heading = ({text, styles, gradient}) => {
  return (
    <Typography
      variant="h1"
      className={`text-4xl sm:text-[42px] lg:text-5xl ${styles??''} text-center lg:text-left leading-tight lg:leading-[1.22] font-medium font-heading ${gradient?'text-transparent bg-clip-text bg-gradient-to-br from-[rgba(255,45,247,1)] via-[rgba(82,0,255,1)] to-[rgba(0,240,255,1)]':''}`}
    >
      {text}
    </Typography>
  );
};

export default Heading;
