import React from 'react'
import insta from "../assets/insta.png";
import Link from 'next/link';
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
            <a href="tel:+918073243278"
              className="text-2xl font-bold my-2 text-[#40E0D0] cursor-pointer"
              onClick={copyPhoneNumber}
            >
              +918073243278
            </a>
          </div>
          <div className="flex flex-col  ">
            <Link href="/" className="my-2 font-inter text-[#40E0D0] cursor-pointer">
                Home
            </Link>
            <Link href="/events" className="my-2 font-inter text-[#40E0D0] cursor-pointer">
                Events
            </Link>
            
            <a href="https://www.instagram.com/xactitude2025/" className="my-2 mr-4 font-inter flex gap-1 text-[#40E0D0] cursor-pointer">
              {" "}
              <Image src={insta} alt="" className="w-7" /> Instagram
            </a>
          </div>
        </div>
  )
}

export default Footer