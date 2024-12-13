import React from 'react'
import Image, { StaticImageData } from 'next/image'



const Select = ({title, image}: {title: string, image: string | StaticImageData}) => {
  return (
    <div className='bg-black'>
      <div className='max-w-[220px]'>
        <Image src={image} alt="bg1" className="w-full h-full object-cover"/>
        <div className='bg-black text-white'>
          <h3 className="text-xl my-1">{title}</h3>  
        </div>
      </div>
    </div>
  )
}

export default Select