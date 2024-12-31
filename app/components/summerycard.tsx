"use client"; // Mark this as a Client Component

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import localFont from 'next/font/local'

interface SelectProps {
  no: string;
  title: string;
  image: string | StaticImageData;
}

const jersey = localFont({
  src: "../fonts/Jersey10-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-jersey",
});


const summerycard: React.FC<SelectProps> = ({ no, title, image}) => {
  return (
    <div  className="my-6 mx-3 ">
      <div className="flex  gap-4 my-6">
        <h1 className='text-4xl text-white font-bold opacity-50 md:text-5xl'>{no}</h1>
        <div className='flex items-center md:items-start md:flex-col gap-4 md:gap-1 '>
          <Image src={image} alt="bg1" className="max-w-[4rem] md:max-w-[200px] md:max-h-[200px] " />
          <p className={`text-3xl    text-gray-300 md:bg-[#2fff60] md:text-black text-center w-full ${jersey.className} `}>{title}</p>
        </div>
      </div>
      <hr className='opacity-50 md:hidden' />
    </div>
  );
};

export default summerycard;
