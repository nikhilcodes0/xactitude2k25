"use client"

import React from 'react'
// import Image from 'next/image'
import Card from './Card'
import eventsData from '../events/eventsData'
import PulsatingButton from "@/components/ui/pulsating-button";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Events = () => {
  const router = useRouter();
  return (
    <>
    <div className="mt-48">
        <h1 className="relative z-10 text-[8rem] mt-5 md:text-7xl font-antonio bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] text-center font-bold tracking-tighter">EVENTS</h1>

        <div className="mt-20 overflow-hidden h-[45rem] cursor-pointer" onClick={() => {
          router.push('/events')
        }}>
          <Card 
            title={eventsData[0].name}
            description={eventsData[0].description}
            image={eventsData[0].image}
            className="relative z-[9]"
            date={eventsData[0].date}
            duration="3 Hr"
          />
          <Card 
            title={eventsData[9].name}
            description={eventsData[9].description}
            image={eventsData[9].image}
            className="relative bottom-[22rem] -left-[7rem] -rotate-[20deg] z-[8]"
            date={eventsData[9].date}
            duration="3 Hr"
          />
          <Card 
            title={eventsData[2].name}
            description={eventsData[2].description}
            image={eventsData[2].image}
            className="relative bottom-[46rem] left-[8rem] rotate-[20deg] z-[8]"
            date={eventsData[2].date}
            duration="3 Hr"
          />
          <Card 
            title={eventsData[3].name}
            description={eventsData[3].description}
            image={eventsData[3].image}
            className="relative bottom-[66rem] left-[15rem] rotate-[30deg] z-[7]"
            date={eventsData[3].date}
            duration="3 Hr"
          />
          <Card 
            title={eventsData[4].name}
            description={eventsData[4].description}
            image={eventsData[4].image}
            className="relative bottom-[90rem] -left-[14rem] -rotate-[30deg] z-[6]"
            date={eventsData[4].date}
            duration="3 Hr"
          />
        </div>
      <div className='flex flex-col items-center  pb-12'>
        <p className='text-neutral-400 text-2xl font-antonio font-bold mx-auto'>ON 30th & 31st JAN</p>
        <div className='flex justify-between items-center mt-10 w-full'>
          <hr className='border-neutral-400 w-[6rem] '/>
          <Link href="/soon">
            <PulsatingButton className='block'>
              <p className='text-white text-3xl font-antonio font-bold mx-auto'>REGISTER</p>
            </PulsatingButton>
          </Link>
          <hr className='border-neutral-400 w-[6rem] '/>
        </div>
      </div>
    </div>
        
    </>
  )
}

export default Events
