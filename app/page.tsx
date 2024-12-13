import React from "react";
import Image from "next/image";
// import Events from '../components/Events'
import Nav from "./components/Nav";
import backdrop from "./assets/X.png";
import bgimg from "./assets/bg.png";
import localFont from "next/font/local";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

const humaneSemBd = localFont({
  src: "./fonts/Humane-SemiBold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-humane",
});

const meraPro = localFont({
  src: "./fonts/MeraPro.otf",
  weight: "700",
  style: "normal",
  variable: "--font-mera",
});

export default function Page() {
  return (
    <div className="bg-black">
      <div>
        <Nav />
        <div className="">
          <div className=" mt-[18rem] relative">
            <Image
              src={backdrop}
              alt="backdrop"
              className="absolute  z-0 bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <div className={humaneSemBd.className}>
              <h1 className="absolute left-1/2 -top-28 transform -translate-x-1/2 -translate-y-1/2 text-center text-[10rem] font-humane bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] font-extrabold ">
                XACTITUDE
              </h1>
            </div>
            <div className={`${meraPro.className} relative bottom-10`}>
              <VelocityScroll
                text="Restructuring tech for tomorrow"
                default_velocity={3}
                className=" text-center text-lg font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] "
              />
            </div>
          </div>
          <Image
            src={bgimg}
            alt="background image"
            className=" object-fill z-0  mx-auto mt-14"
          />
          <div className="absolute bottom-4 border-l-4 mx-2 border-opacity-60 p-2 border-white ">
            <p className="text-white font-sans text-wrap w-20 opacity-60">
              Start From Jan 21
            </p>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <h1 className="text-white  text-[4.2rem] font-black font-antonio text-start p-4 px-12">
          Welcome to <p className="bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-[#40E0D0] font-extrabold">XACTITUDE -</p>
        </h1>
      </div>
    </div>

  );
}
