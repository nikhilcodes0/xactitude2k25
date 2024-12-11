import React from 'react'
import Image from 'next/image'
import menu_01 from '../assets/menu-01.png'


const Nav = () => {
  return (
    <>
        <nav className='p-4 flex'>
            <div className='flex m-2 gap-1'>
                <Image src={menu_01} alt="" className='w-8'/>
                <p className=' font-sans text-2xl text-[#40E0D0] p-0'>Menu</p>
            </div>

        </nav>
        
    </>
  )
}

export default Nav