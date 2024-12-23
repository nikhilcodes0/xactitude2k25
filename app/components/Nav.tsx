'use client'

import React from 'react'
import Image from 'next/image'
import menu_01 from '../assets/menu-01.png'
import logo from '../assets/logo.png'
import cancel from '../assets/cancel.png'
import Link from 'next/link'
import { useState } from 'react'



const Nav = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className='flex justify-center '>
        <nav className='mx-auto px-6 fixed w-full top-0 py-2 z-[61] bg-black rounded-md '>
            <div className='flex m-2 gap-1 hover:cursor-pointer justify-between items-center w-[95%]' >
                <Link href={'/'}>
                  <Image src={logo} alt='' className='w-[90px] h-full' />
                </Link>
                <Image src={isOpen ? cancel : menu_01} alt="" className='w-8 z-[62]' onClick={toggleMenu}/>
            </div>
            <div className={`flex absolute gap-20 flex-col bg-black -top-2 overflow-hidden z-[61] w-full h-screen pt-32 -left-full transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-full' : ''}`}>
              <Link href="/" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-40'}`}>
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>Home</p>
              </Link>
              <Link href="/events" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-48'}`}>
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>Events</p>
              </Link>
              <Link href="/soon" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-48'}`}>
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>Register</p>
              </Link>
              <Link href="/about" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-52'}`} >
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>About Us</p>
              </Link>
            </div>

        </nav>
        
    </div>
  )
}

export default Nav