import React from 'react'
import Image, { StaticImageData } from 'next/image'




const Card = ({title, description, image, className, date, duration}: {title: string, description: string, image: string | StaticImageData, className: string, date: string, duration: string}) => {
  return (
    <div className={`bg-white rounded-xl shadow-xl  shadow-neutral-950  flex flex-col font-black w-[220px] p-[0.5rem] mx-auto ${className}`}>
      <div>
        <Image src={image} alt="bg1" className="w-full h-full object-cover"/>
      </div>
      <div className="p-1 mt-1">
        <h3 className="text-4xl text-neutral-950 font-jacquard">{title}</h3>
        <p className="text-xs text-neutral-950 font-sans">{description}</p>
      </div>
      <div className="text-neutral-950 font-antonio font-normal bg-[#F8F8F8] shadow-inner shadow-neutral-400 p-4 rounded-xl flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Date</p>
          <p>Time</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-sans font-bold">{date}</p>
          <p className="text-xl font-sans font-bold">{duration}</p>
        </div>
      </div>
    </div>
  )
}

export default Card