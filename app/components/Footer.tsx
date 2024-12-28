'use client';

import React from 'react'
import insta from "../assets/insta.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ltree from "../assets/linktree.png";
import Image from 'next/image';







function copyPhoneNumber() {
    const phoneNumber = "+919988776655";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision className='mt-16 w-full h-full'>
      <div className='bg-[#0d0d0d] w-full h-full'>
      <div className="flex justify-between md:max-w-[60%] lg:max-w-[50%] mx-auto lg:text-2xl">
          <div className="mx-4">
            <p className="font-bold my-2 font-inter">
              Have any questions?
            </p>
            <p className="my-2 font-inter">Give us a ring</p>
            <div className='md:flex md:gap-12 mt-4'>
              <div className='flex gap-2 flex-col-reverse my-4'> 
              <a href="tel:+918073243278"
                className="text-2xl font-bold my-2 text-[#40E0D0] cursor-pointer font-sans"
                onClick={copyPhoneNumber}
              >
                +918073243278
              </a>
              <p className='text-2xl font-bold  text-white cursor-pointer font-sans'>Nagraj S Math</p>
              </div>
              <div className='flex flex-col-reverse  gap-2 my-4'> 
              <a href="tel:+919548913230"
                className="text-2xl font-bold my-2 text-[#40E0D0] cursor-pointer font-sans"
                onClick={copyPhoneNumber}
              >
              +919548913230
              </a>
              <p className='text-2xl font-bold  text-white cursor-pointer font-sans'>Rishabh Bhatt</p>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col  ">
            <a href="https://linktr.ee/Xactitude_25" target='_blank' className='my-2 mr-4 font-inter flex gap-1 text-[#40E0D0] cursor-pointer'>
            { ""}
            <Image src={ltree} alt='' className='w-7'/>
                Linktree
            </a>
            
            <a href="https://www.instagram.com/xactitude2025/" target='_blank' className="my-2 mr-4 font-inter flex gap-1 text-[#40E0D0] cursor-pointer">
              {" "}
              <Image src={insta} alt="" className="w-7" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Footer