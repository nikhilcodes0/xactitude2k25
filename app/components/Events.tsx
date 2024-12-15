import React from 'react'
// import Image from 'next/image'
import Card from './Card'
import bg1 from '../assets/cardbg-1.png'
import bg2 from '../assets/bgmi.png'
import bg3 from '../assets/codeshift.png'
import bg4 from '../assets/fifa.png'
import bg5 from '../assets/itm.png'
import PulsatingButton from "@/components/ui/pulsating-button";


const Events = () => {
  return (
    <>
    <div className="mt-48">
        <h1 className="relative z-10 text-[8rem] mt-5 md:text-7xl font-antonio bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] text-center font-bold tracking-tighter">EVENTS</h1>

        <div className="mt-12 overflow-hidden h-[45rem]">
          <Card 
            title="Weblynx"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={bg1}
            className="relative z-[9]"
            date="30/1"
            duration="3 Hr"
          />
          <Card 
            title="BGX"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={bg2}
            className="relative bottom-[24rem] -left-[7rem] -rotate-[20deg] z-[8]"
            date="30/1"
            duration="3 Hr"
          />
          <Card 
            title="Code Shift"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={bg3}
            className="relative bottom-[49rem] left-[7rem] rotate-[20deg] z-[8]"
            date="30/1"
            duration="3 Hr"
          />
          <Card 
            title="Fifa"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={bg4}
            className="relative bottom-[70rem] left-[15rem] rotate-[30deg] z-[7]"
            date="30/1"
            duration="3 Hr"
          />
          <Card 
            title="IT Manager"
            description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={bg5}
            className="relative bottom-[96rem] -left-[14rem] -rotate-[30deg] z-[6]"
            date="30/1"
            duration="3 Hr"
          />
        </div>
      <div className='flex flex-col items-center mt-12 pb-12'>
        <p className='text-neutral-400 text-2xl font-antonio font-bold mx-auto'>STARTS FROM JAN 30</p>
        <div className='flex justify-between items-center mt-10 w-full'>
          <hr className='border-neutral-400 w-[8rem] '/>
          <PulsatingButton className='block'>
            <p className='text-white text-3xl font-antonio font-bold mx-auto'>REGISTER</p>
          </PulsatingButton>
          <hr className='border-neutral-400 w-[8rem] '/>
        </div>
      </div>
    </div>
        
    </>
  )
}

export default Events
