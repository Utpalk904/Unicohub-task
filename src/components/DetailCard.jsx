import React from 'react';
import Heading from './Heading';
import Button from './Button';

const DetailCard = ({rev, data}) => {
  return (
    <div className={`flex ${rev?'lg:flex-row-reverse' : 'lg:flex-row'} lg:gap-8 lg:items-center flex-col w-full`}>
        <div>
            <div>
                <Heading text={data.heading} gradient={true} />
                <Heading text={data.subHeading} styles="text-3xl sm:text-[39px]" />
            </div>
            <div>
                {data.details}
            </div>
          <hr className="bg-gradient-to-r from-[rgba(255,45,247,1)] via-[rgba(82,0,255,1)] to-[rgba(0,240,255,1)] lg:hidden md:w-1/2 mx-auto my-5 h-[2px] w-[70%]" />
            <div>
                <Button text="Learn More" icon={true} />
            </div>
        </div>
        <div>
            <img src={data.src} alt={data.heading} />
        </div>
    </div>
  )
}

export default DetailCard;