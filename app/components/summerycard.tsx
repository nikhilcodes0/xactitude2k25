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
      <div className="flex items-center gap-4 my-6">
        <h1 className='text-4xl text-white font-bold opacity-50'>{no}</h1>
        <Image src={image} alt="bg1" className="max-w-24" />
        <p className={`text-2xl font-extralight font-inter text-gray-300 `}>{title}</p>
      </div>
      <hr className='opacity-50' />
    </div>
  );
};

export default summerycard;
