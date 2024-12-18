import { StaticImageData } from 'next/image';
import React from 'react'
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import { Inter } from "next/font/google";
import localFont from 'next/font/local';

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

const jersey = localFont({
    src: "../fonts/Jersey10-Regular.ttf",
    weight: "400",
    style: "normal",
    variable: "--font-jersey",
  });

interface Props {
    no: string;
    title: string;
    image: string | StaticImageData;
    description: string;
    chip1: string;
    chip2: string;
    chip3: string;
}

const EventsGroup = ({no, title, image, description, chip1, chip2, chip3}: Props) => {
  return (
    <div className=' text-white'>
        <div className="my-6 flex justify-between gap-8 p-4">
            <div>
                <h1 className={`${inter.className} text-[5rem] text-white font-bold opacity-60 leading-none tracking-[0.03em]`}>{no}.</h1>
            </div>
            <div className='flex  gap-3 flex-col    '>
                <Image src={image} alt={title} className='w-full h-full object-cover' />
                <p className={`${inter.className} text-base`}>{description}</p>
                <p className={`${jersey.className} text-4xl font-bold`}>{title}</p>
                <div className='flex gap-3'>
                    <Badge variant="outline" className='text-white font-sans'>{chip1}</Badge>
                    <Badge variant="outline" className='text-white font-sans'>{chip2}</Badge>
                    <Badge variant="outline" className='text-white font-sans'>{chip3}</Badge>
                </div>
            </div>
        </div>
        <hr className='opacity-30 py-4 w-full mt-[4rem]' />
    </div>
  )
}

export default EventsGroup