"use client"

import { StaticImageData } from 'next/image';
import React from 'react'
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import { useRouter } from 'next/navigation';

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
    name: string;
    image: string | StaticImageData;
    description: string;
    chips: string[];
    slug: string;
}

const EventsGroup = ({no, name, image, description, chips, slug}: Props) => {
  const router = useRouter();
  return (
    <div className=' text-white cursor-pointer' onClick={() => router.push(`/events/${slug}`)}>
        <div className="my-6 flex justify-between gap-5 p-4">
            <div>
                <h1 className={`${inter.className} text-[4rem] text-white font-medium opacity-40 leading-none tracking-[0.03em]`}>{no}.</h1>
            </div>
            <div className='flex  gap-3 flex-col    '>
                <Image src={image} alt={name} className='w-[400px] h-[150px] object-cover ' />
                <p className={`${inter.className} text-sm`}>{description}</p>
                <p className={`${jersey.className} text-4xl font-bold capitalize text-stroke-black`}>{name}</p>
                <div className='flex gap-3'>
                    {chips.map((chip: string, index: number) => (
                        <Badge key={index} variant="outline" className='text-white font-sans text-center'>{chip}</Badge>
                    ))}
                </div>
            </div>
        </div>
        <hr className='opacity-30 py-4 w-full mt-[4rem]' />
    </div>
  )
}

export default EventsGroup