"use client";

import React from "react";
import insta from "../assets/insta.png";
import phone from "../assets/phone.png"
import ltree from "../assets/linktree.png";
import Image from "next/image";



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
    <div className="flex justify-between my-16 md:max-w-[80%]  mx-auto lg:text-2xl text-white flex-col gap-10 px-6 md:flex-row ">
      <div className="">
        <p className="font-black my-2 font-inter text-2xl md:text-3xl">Have any queries?</p>
        <p className="my-2 font-inter text-2xl md:text-3xl">Give us a ring</p>
        <p className="my-2 font-inter text-sm text-[#40E0D0]">Click on the icon to copy/direct dial!</p>
        <div className="flex gap-2 items-center mt-6">
          <p className="text-sm font-bold  text-white cursor-pointer font-sans md:text-xl">
            Nagraj S Math
          </p>
          <a
            href="tel:+918073243278"
            className="text-sm font-bold my-2 text-[#40E0D0] cursor-pointer font-sans"
            onClick={copyPhoneNumber}
          >
            <Image src={phone} alt="" className="w-6 md:w-10"/>
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold  text-white cursor-pointer font-sans md:text-xl">
            Rishabh Bhatt
          </p>
          <a
            href="tel:+919548913230"
            className="text-sm font-bold my-2 text-[#40E0D0] cursor-pointer font-sans"
            onClick={copyPhoneNumber}
          >
            <Image src={phone} alt="" className="w-6 md:w-10"/>
          </a>
        </div>
      </div>
      <div className="flex flex-col  ">
        <a
          href="https://linktr.ee/Xactitude_25"
          target="_blank"
          className="my-2 mr-4 font-inter flex gap-1 text-[#40E0D0] cursor-pointer"
        >
          {""}
          <Image src={ltree} alt="" className="w-7" />
          Linktree
        </a>

        <a
          href="https://www.instagram.com/xactitude2025/"
          target="_blank"
          className="my-2 mr-4 font-inter flex gap-1 text-[#40E0D0] cursor-pointer"
        >
          {" "}
          <Image src={insta} alt="" className="w-7" /> Instagram
        </a>
      
      </div>
    </div>
  );
};

export default Footer;
