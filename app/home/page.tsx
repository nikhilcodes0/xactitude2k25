import React from 'react'
import Image from 'next/image'
import Events from '../components/Events' 
import Nav from '../components/Nav'
import backdrop from '../assets/X.png'
import bgimg from '../assets/bg.png'
import localFont from 'next/font/local';


const humaneSemBd = localFont({
    src: '../fonts/Humane-SemiBold.ttf',
    weight: '600', 
    style: 'normal', 
    variable: '--font-humane', 
});

const meraPro = localFont({
    src: '../fonts/MeraPro.otf',
    weight: '700', 
    style: 'normal', 
    variable: '--font-mera', 
});


// import Card from '../components/Card'

const Home = () => {
  return (
    <>
        <Nav />
        <div className="">
            <div className=" mt-[22rem] relative">
                <Image src={backdrop} alt="backdrop" className="absolute  object-fill z-0 bottom-0 left-1/2 transform -translate-x-1/2" />
                <div className={humaneSemBd.className}>
                    <h1 className="absolute left-1/2 -top-36 transform -translate-x-1/2 -translate-y-1/2 text-center text-[10rem] font-humane bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] font-extrabold " >XACTITUDE</h1>
                </div>
                <div className={meraPro.className}>

                    <p className='absolute text-orange-400 text-l -top-20 text-wrap'>Reconstructing tech for Tomorrow</p>
                </div>
            </div>
            <Image src={bgimg} alt="background image" className="relative  object-fill z-0 -bottom-5 mx-auto" />
            <div className='absolute bottom-4 border-l-4 mx-2 border-opacity-60 p-2 border-white '>
                <p className='text-white font-sans text-wrap w-20 opacity-60'>Start From Jan 21</p>
            </div>
        </div>
        <Events />
    </>
  )
}

export default Home   