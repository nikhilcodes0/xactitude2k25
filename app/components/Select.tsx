"use client"; // Mark this as a Client Component

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import localFont from "next/font/local";


interface SelectProps {
  title: string;
  selected: boolean;
  image: string | StaticImageData;
  onClick: () => void;
}

const jersey = localFont({
  src: "../fonts/Jersey10-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-jersey",
});

const Select: React.FC<SelectProps> = ({ title, selected=false, image, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer ">
      <div className="max-w-[200px] md:max-w-[250px] xl:w-[300px] mx-auto">
        <Image src={image} alt="bg1" className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] object-cover" />
        <div className={selected ? 'bg-[#2FFF60] text-black' : 'text-white'}>
          <h3 className={`${jersey.className} text-3xl lg:text-4xl mx-1 capitalize`}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Select;
