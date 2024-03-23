import React from 'react';
import './style.module.css'

const Marquee = ({ children }) => {
  return (
    <div className='overflow-hidden text-[#FFFFDD] border-y-2 border-[#FFF7D4] py-[-180px] whitespace-nowrap w-full'>
      <div className='inline-block text-[14vw] font-[FoundersGrotesk] leading-tighter tracking-tight uppercase pr-24 animate-marquee'>
        <span>{children}</span>
      </div>
      <div className='inline-block text-[14vw] font-[FoundersGrotesk] leading-tighter tracking-tight uppercase pr-24 animate-marquee'>
        <span>{children}</span>
      </div>
      
    </div>
  );
};

export default Marquee;
