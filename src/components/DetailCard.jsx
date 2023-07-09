import React from 'react';
import Heading from './Heading';
import Button from './Button';

const DetailCard = ({rev, data}) => {
  return (
    <div className={`flex ${rev?'lg:flex-row-reverse lg:justify-between' : 'lg:flex-row lg:justify-center'} flex-col-reverse items-center lg:gap-8 px-6 sm:px-16 md:px-24 lg:px-10 xl:px-20 w-full`}>
        <div className={`flex flex-col gap-4 items-center lg:items-start lg:w-[65%] xl:w-[60%] 2xl:w-1/2`}>
            <div>
                <Heading text={data.heading} gradient={true} />
                <Heading text={data.subHeading} styles="text-3xl sm:text-[39px]" />
            </div>
            <div className='text-center lg:text-left sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[85%] 2xl:w-[75%]'>
                {data.details}
            </div>
          <hr className="bg-gradient-to-r from-[rgba(255,45,247,1)] via-[rgba(82,0,255,1)] to-[rgba(0,240,255,1)] sm:w-[65%] md:w-[55%] lg:w-[75%] 2xl:w-[75%] lg:mx-0 mx-auto my-5 h-[2px] w-[70%]" />
            <div className='w-[90%] mx-auto sm:w-[70%] md:w-[60%] lg:mx-0 lg:w-1/2 xl:w-[30%]'>
                <Button text="Learn More" icon={true} />
            </div>
        </div>
        <div className='2xl:w-fit'>
            <img src={data.src} alt={data.heading} className='max-w-[492px] w-full lg:max-w-[500px]'/>
        </div>
    </div>
  )
}

export default DetailCard;