"use client";

import React from "react";
import Image from "next/image";
import menu_01 from "../assets/menu-01.png";
import logo from "../assets/logo.png";
import cancel from "../assets/cancel.png";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  justify-center ">
      <nav className="mx-auto px-6 fixed w-full top-0 py-2 z-[61] bg-[#0d0d0d] rounded-md md:px-20 xl:px-32 xl:text-lg">
        <div className="flex m-2 gap-1  justify-between items-center w-[95%]">
          <Link href={"/"} className=" hover:cursor-pointer">
            <Image
              src={logo}
              alt=""
              className="w-[90px] h-full xl:h-[50px] xl:w-full"
            />
          </Link>
          <ul className="text-white font-inter mr-13 md:flex gap-6 hidden items-center  xl:gap-10">
            <li className="hover:cursor-pointer hover:text-[#40E0D0]">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:cursor-pointer hover:text-[#40E0D0]">
              <Link href={"/events"}>Events</Link>
            </li>
            {/* <li className='hover:cursor-pointer'>
                    <Link href={'/faq'}>
                      FAQ&apos;s
                    </Link>
                  </li> */}
            <li>
              <Link href={"/soon"}>
                <button className=" border-[2px] border-solid border-white py-[2px] px-2 rounded-3xl hover:cursor-pointer w-[8rem] hover:text-[#40E0D0] hover:border-[#40E0D0]">
                  Register
                </button>
              </Link>
            </li>
          </ul>
          <Image
            src={isOpen ? cancel : menu_01}
            alt=""
            className="w-8 z-[62] md:hidden"
            onClick={toggleMenu}
          />
        </div>
        <div
          className={`flex absolute gap-20 flex-col bg-[#0d0d0d]  overflow-hidden z-[61] w-full h-screen pt-32 -left-full transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-full" : ""
          }`}
        >
          <Link
            href="/"
            className={`mx-8 relative transition-all duration-1000 ease-in-out ${
              isOpen ? "left-0" : "-left-40"
            }`}
          >
            <p className=" font-sans text-5xl text-[#40E0D0] p-0">Home</p>
          </Link>
          <Link
            href="/events"
            className={`mx-8 relative transition-all duration-1000 ease-in-out ${
              isOpen ? "left-0" : "-left-48"
            }`}
          >
            <p className=" font-sans text-5xl text-[#40E0D0] p-0">Events</p>
          </Link>
          <Link
            href="/soon"
            className={`mx-8 relative transition-all duration-1000 ease-in-out ${
              isOpen ? "left-0" : "-left-48"
            }`}
          >
            <p className=" font-sans text-5xl text-[#40E0D0] p-0">Register</p>
          </Link>
          <Link
            href="/about"
            className={`mx-8 relative transition-all duration-1000 ease-in-out ${
              isOpen ? "left-0" : "-left-52"
            }`}
          >
            <p className=" font-sans text-5xl text-[#40E0D0] p-0">About Us</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
