"use client"

import React from 'react'
// import Image from 'next/image'
import Card from './Card'
import eventsData from '../events/eventsData'
import PulsatingButton from "@/components/ui/pulsating-button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  setHoverType: (type: string | null) => void;
}


const Events: React.FC<Props> = ({ setHoverType })  => {
  const router = useRouter();
  const handleMouseEnter = (type: string) => {
    setHoverType(type);
    console.log("card eneters")
  };

  const handleMouseLeave = () => {
    setHoverType(null);
  };

  return (
    <>
    <div className="mt-48 hover:cursor-none">
        <h1 className="relative z-10 text-[8rem] mt-5 md:text-[11rem] xl:text-[18rem] hover:cursor-none font-antonio bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] text-center font-bold tracking-tighter ">EVENTS</h1>

        <div className="mt-20 md:-mt-16 xl:-mt-[10rem] hover:cursor-none z-[11] relative overflow-hidden h-[45rem] md:h-[50rem] cursor-pointer " onClick={() => {
          router.push('/events')
        }}
        
        >
          <Card 
            title={eventsData[0].name}
            description={eventsData[0].description}
            image={eventsData[0].image}
            className="relative z-[9] hover:cursor-none "
            date={eventsData[0].date}
            duration="3 Hr"
            onMouseEnter={() => handleMouseEnter("card")} 
            onMouseLeave={() => handleMouseLeave()}
          />
          <Card 
            title={eventsData[9].name}
            description={eventsData[9].description}
            image={eventsData[9].image}
            className="relative bottom-[22rem] hover:cursor-none -left-[7rem] -rotate-[20deg] z-[8] md:bottom-[26rem] md:-left-[8rem]"
            date={eventsData[9].date}
            duration="3 Hr"
            onMouseEnter={() => handleMouseEnter("card")} 
            onMouseLeave={() => handleMouseLeave()}
          />
          <Card 
            title={eventsData[2].name}
            description={eventsData[2].description}
            image={eventsData[2].image}
            className="relative bottom-[46rem] hover:cursor-none left-[8rem] rotate-[20deg] z-[8] md:bottom-[52.5rem] md:left-[10rem]"
            date={eventsData[2].date}
            duration="3 Hr"
            onMouseEnter={() => handleMouseEnter("card")} 
            onMouseLeave={() => handleMouseLeave()}
          />
          <Card 
            title={eventsData[3].name}
            description={eventsData[3].description}
            image={eventsData[3].image}
            className="relative bottom-[66rem] hover:cursor-none left-[15rem] rotate-[30deg] z-[7] md:bottom-[77rem] md:left-[18rem]"
            date={eventsData[3].date}
            duration="3 Hr"
            onMouseEnter={() => handleMouseEnter("card")} 
            onMouseLeave={() => handleMouseLeave()}
          />
          <Card 
            title={eventsData[4].name}
            description={eventsData[4].description}
            image={eventsData[4].image}
            className="relative bottom-[90rem] hover:cursor-none -left-[14rem] -rotate-[30deg] z-[6] md:bottom-[106.7rem] md:-left-[16rem]"
            date={eventsData[4].date}
            duration="3 Hr"
            onMouseEnter={() => handleMouseEnter("card")} 
            onMouseLeave={() => handleMouseLeave()}
          />
        </div>
      <div className='flex flex-col items-center  pb-12'>
        <p className='text-neutral-400 text-2xl font-antonio  font-bold mx-auto md:text-3xl'>ON 30th & 31st JAN</p>
        <div className='flex justify-between items-center mt-10 w-full'>
          <hr className='border-neutral-400 w-[6rem] md:w-[17rem]'/>
          <Link href="/reg">
            <PulsatingButton className='block'
            onMouseEnter={() => handleMouseEnter("link")}
            onMouseLeave={() => handleMouseLeave()}
            >
              <p className='text-white text-3xl hover:cursor-none font-antonio font-bold mx-auto lg:text-4xl'>REGISTER</p>
            </PulsatingButton>
          </Link>
          <hr className='border-neutral-400 w-[6rem] md:w-[17rem]'/>
        </div>
      </div>
    </div>
        
    </>
  )
}

export default Events
