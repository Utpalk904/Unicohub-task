import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Button = ({text, icon, link}) => {
  return (
    <a href={link??'#'} className='flex items-center justify-center gap-4 border cursor-pointer select-none font-medium rounded-2xl py-[6px] transition-all duration-700 hover:bg-gradient-to-r hover:from-[rgba(255,45,247,1)] hover:via-[rgba(82,0,255,1)] hover:to-[rgba(0,240,255,1)]'>
        {text}
        <BsArrowRight className={`${icon?'':'hidden'}`}/>
    </a>
  )
}

export default Button;