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
    <div onClick={onClick} className="cursor-pointer">
      <div className="max-w-[220px]">
        <Image src={image} alt="bg1" className="w-full h-full object-cover" />
        <div className={selected ? 'bg-[#2FFF60] text-black' : 'text-white'}>
          <h3 className={`${jersey.className} text-3xl `}>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Select;
