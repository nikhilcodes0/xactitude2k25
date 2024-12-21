'use client'

import React from 'react'
import Image from 'next/image'
import menu_01 from '../assets/menu-01.png'
import cancel from '../assets/cancel.png'
import Link from 'next/link'
import { useState } from 'react'


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
        <nav className='py-8 px-6'>
            <div className='flex m-2 gap-1 hover:cursor-pointer' onClick={toggleMenu}>
                <Image src={isOpen ? cancel : menu_01} alt="" className='w-8 z-20' />
                <p className=' font-sans text-2xl text-[#40E0D0] p-0'>Menu</p>
            </div>
            <div className={`flex absolute gap-20 flex-col bg-black top-0 z-10 w-full h-full pt-32 -left-full transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-full' : ''}`}>
              <Link href="/" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-40'}`}>
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>Home</p>
              </Link>
              <Link href="/events" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-48'}`}>
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>Events</p>
              </Link>
              <Link href="/soon" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-48'}`}>
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>Register</p>
              </Link>
              <Link href="/contact" className={`mx-8 relative transition-all duration-1000 ease-in-out ${isOpen ? 'left-0' : '-left-52'}`} >
                <p className=' font-sans text-5xl text-[#40E0D0] p-0'>Contact</p>
              </Link>
            </div>

        </nav>
        
    </>
  )
}

export default Nav