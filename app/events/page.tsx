import React from 'react'
import Image from 'next/image'
import backdrop from '../assets/X.png'
import Nav from '../components/Nav'
import bgimg from '../assets/bg.png'

// import Card from '../components/Card'

const Events = () => {
  return (
    <>
    <Nav/>
    <div className="mt-36">
        <h1 className="relative z-10 text-[11rem] mt-10 md:text-7xl font-humane bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] text-center font-extrabold">XACTITUDE</h1>
        <Image src={backdrop} alt="backdrop" className="relative  object-fill z-0 bottom-80 mx-auto" />
        <Image src={bgimg} alt="background image" className="relative  object-fill z-0 bottom-80 mx-auto" />
    </div>
        
    </>
  )
}

export default Events