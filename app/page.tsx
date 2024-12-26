'use client';

import React from "react";
import Image, { StaticImageData } from "next/image";
// import Events from '../components/Events'
import Nav from "./components/Nav";
import backdrop from "./assets/X.png";
import eventsData from "./events/eventsData";
import bgimg from "./assets/bg.png";
import localFont from "next/font/local";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Marquee from "@/components/ui/marquee";
import Steps from "./components/Steps";
import Events from "./components/Events";
import { useRouter } from "next/navigation";


const humaneSemBd = localFont({
  src: "./fonts/Humane-SemiBold.ttf",
  weight: "600",
  style: "normal",
  variable: "--font-humane",
});

const jersey = localFont({
  src: "./fonts/Jersey10-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-jersey",
});



const meraPro = localFont({
  src: "./fonts/MeraPro.otf",
  weight: "700",
  style: "normal",
  variable: "--font-mera",
});

const EventCard = ({
  title,
  image,
}: {
  title: string;
  image: StaticImageData;
}) => {
  return (
    <div className="  flex flex-col antialiased  justify-center  overflow-hidden ">
      <Image src={image} alt={title} className="object-cover w-[250px] h-[150px] md:w-[350px] md:h-[250px] xl:w-[450px] xl:h-[350px]" />
      <p
        className={`${jersey.className} text-black text-2xl tracking-tighter bg-green-400 w-full text-center uppercase md:text-3xl xl:text-4xl md:tracking-wide`}
      >
        {title}
      </p>
    </div>
  );
};

export default function Page() {
  const router = useRouter();

  return (
    
    <div>
    <div className="bg-black mt-32">
      <Nav />
      <div className="z-10 ">
        <div className="mt-[22rem] z-10">
          <div className=" mt-[18rem] ">
            <Image
              src={backdrop}
              alt="backdrop"
              className="absolute md:hidden  z-0 top-[23%] left-1/2 transform -translate-x-1/2 w-[70%] max-w-[300px] "
            />
            <div className={humaneSemBd.className}>
              <h1 className="absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-center text-[9rem] font-humane bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] font-extrabold  md:-mt-[0.5rem] md:text-[20rem] ">
                XACTITUDE
              </h1>
            </div>
            <div className={`${meraPro.className} relative bottom-[4rem] md:hidden `}>
              <VelocityScroll
                text="Revitalizing tech for tomorrow ○"
                default_velocity={2}
                className=" text-center text-lg font-bold tracking-[0.1em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] text-stroke-white"
              />
            </div>
          </div>
          <div className="text-white font-inter text-sm lg:text-lg flex justify-center gap-[16rem]">
            <button className="bg-[#181818] hidden md:block relative rounded-3xl border border-[#4c4c4c] px-4 py-2 w-40 lg:w-48  bottom-[-20rem]">Brochure</button>
            <Image
              src={bgimg}
              alt="background image"
              className=" object-fill z-0  mx-auto w-[65%] max-w-[300px] md:max-w-[500px] md:w-[45%] absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <button className="bg-[#181818] rounded-3xl hidden md:block border border-[#4c4c4c] px-4 py-2 w-40 lg:w-48 relative bottom-[-20rem] ">Rules & Regulation</button>
          </div>
        </div>
      </div>
      <div className="mt-[30rem] md:mt-[30rem] lg:mt-[40rem]">
        <h1 className="text-white  text-[3rem]  font-black font-sans text-start p-4 px-3 md:flex md:text-[5rem] ">
          Welcome to
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-[#40E0D0]  text-[3.5rem] md:text-[5rem]   md:ml-4 font-black">
            XACTITUDE&#39;25
          </p>
        </h1>
        
      </div>
      <div className="  flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden lg:mt-10" onClick={() => {
          router.push('/events')
        }}>
        <Marquee pauseOnHover={true} className="[--duration:50s]">
          {eventsData.map((event) => (
            <EventCard
              key={event.name}
              title={event.name}
              image={event.image}
            />
          ))}
        </Marquee>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[95%] relative left-[-25px] lg:left-[-30px] xl:left-[-40px] opacity-50 "/>
        <div className="text-white opacity-50 text-xl font-inter mt-14 mb-8 flex flex-col border-r-[3px] right-[-26%] relative md:right-[-35%] lg:right-[-37%] lg:text-2xl xl:right-[-41%] pr-4">
          <p>Starts At </p>
          <p className="">Jan 30 & 31</p>
        </div>
      </div>
      <div className="mt-28 md:w-[80%] lg:w-[100%] ">
        <p className="text-white text-xl md:text-2xl font-medium font-sans text-start p-4 px-4 md:px-16 lg:text-3xl">
          <span className="font-black">XACTITUDE</span> is the ultimate stage for students to ignite their potential, unleash their skills, and shine before a dynamic crowd of colleges and fiercely spirited competitors.
        </p>
      </div>
      <div className="mt-32">
        <p className="text-white  text-5xl md:text-[8rem] font-black font-antonio text-start p-4 px-12">
          The Process
        </p>
        <hr className="border-white border-1 w-[95%] mx-auto opacity-50 my-2" />
      </div>
      <div className="mt-[8rem]">
        <Steps />
      </div>
      <Events />
    </div>
    </div>
  );
}
