"use client"; // Mark this as a Client Component

import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface SelectProps {
  no: string;
  title: string;
  image: string | StaticImageData;
}


const summerycard: React.FC<SelectProps> = ({ no, title, image}) => {
  return (
    <div  className="my-6 mx-3">
      <div className="flex  gap-4 my-6">
        <h1 className='text-4xl text-white font-bold opacity-50 md:text-5xl'>{no}</h1>
        <div className='flex items-center md:items-start md:flex-col gap-4 md:gap-1'>
          <Image src={image} alt="bg1" className="max-w-24 md:max-w-[200px] md:max-h-[200px]" />
          <p className={`text-2xl font-extralight font-inter  text-gray-300 md:bg-[#2fff60] md:text-black md:px-[1px] w-full `}>{title}</p>
        </div>
      </div>
      <hr className='opacity-50 md:hidden' />
    </div>
  );
};

export default summerycard;
