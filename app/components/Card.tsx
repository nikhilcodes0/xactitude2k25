import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  className: string;
  date: string;
  duration: string;
  onMouseEnter?: () => void;  // Optional event handler for mouse enter
  onMouseLeave?: () => void;  // Optional event handler for mouse leave
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  className,
  date,
  duration,
  onMouseEnter,    // Event handler destructuring
  onMouseLeave     // Event handler destructuring
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-xl shadow-neutral-950 flex flex-col font-black w-[220px] p-[0.5rem] mx-auto md:w-[270px] ${className}`}
      onMouseEnter={onMouseEnter}  // Attach the event handler
      onMouseLeave={onMouseLeave}  // Attach the event handler
    >
      <div>
        <Image src={image} alt="bg1" className="w-full h-full object-cover" />
      </div>
      <div className="p-1 mt-1">
        <h3 className="text-3xl text-neutral-950 font-jacquard capitalize md:text-4xl">{title}</h3>
        <p className="text-[0.6rem] text-neutral-950 font-sans md:text-[0.8rem]">{description}</p>
      </div>
      <div className="text-neutral-950 font-antonio font-normal bg-[#F8F8F8] shadow-inner shadow-neutral-400 p-4 rounded-xl flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Date</p>
          <p>Time</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs font-sans font-bold">{date}</p>
          <p className="text-xs font-sans font-bold">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
