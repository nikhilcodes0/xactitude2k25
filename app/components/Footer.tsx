'use client';

import React from 'react'
import insta from "../assets/insta.png";

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
    <div className="flex justify-between my-16 md:max-w-[60%] lg:max-w-[50%] mx-auto lg:text-2xl">
          <div className="">
            <p className="font-bold my-2 font-inter">
              Have any questions?
            </p>
            <p className="my-2 font-inter">Give us a ring</p>
            <div className='flex gap-2 items-center'> 
            <a href="tel:+918073243278"
              className="text-2xl font-bold my-2 text-[#40E0D0] cursor-pointer font-sans"
              onClick={copyPhoneNumber}
            >
              +918073243278
            </a>
            <p className='text-2xl font-bold  text-white cursor-pointer font-sans'>Nagraj S Math</p>
            </div>
            <div className='flex gap-2 items-center'> 
            <a href="tel:+919548913230"
              className="text-2xl font-bold my-2 text-[#40E0D0] cursor-pointer font-sans"
              onClick={copyPhoneNumber}
            >
             +919548913230
            </a>
            <p className='text-2xl font-bold  text-white cursor-pointer font-sans'>Rishabh Bhatt</p>
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
  )
}

export default Footer