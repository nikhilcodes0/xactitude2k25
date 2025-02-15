"use client";

import React from "react";
import { useState } from "react";
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
import Cursor from "./components/Cursor";
import { useRouter } from "next/navigation";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Footer from "./components/Footer";
import ShimmerButton from "@/components/ui/shimmer-button";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";

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
      <Image
        src={image}
        alt={title}
        className="object-cover w-[250px] h-[150px] md:w-[350px] md:h-[250px] xl:w-[450px] xl:h-[350px]"
      />
      <p
        className={`${jersey.className} text-black text-2xl tracking-tighter bg-green-400 w-full text-center uppercase md:text-3xl xl:text-4xl md:tracking-wide`}
      >
        {title}
      </p>
    </div>
  );
};

export default function Page() {
  const [hoverType, setHoverType] = useState<string | null>(null);
  const router = useRouter();

  const handleMouseEnter = (type: string) => {
    setHoverType(type);
    console.log("Hovering over:", type); // Log to console
  };

  const handleMouseLeave = () => {
    setHoverType(null);
    console.log("Hovering stopped");
  };

  return (
    <div className="mb-10">
      <Cursor hoverType={hoverType} />
      <div className="bg-[0d0d0d] mt-32">
        <div className="z-10 ">
          <Nav setHoverType={setHoverType} />
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
              <div
                className={`${meraPro.className} relative bottom-[3rem] md:hidden `}
              >
                <VelocityScroll
                  text="Revitalizing tech for tomorrow ○"
                  default_velocity={2}
                  className=" text-center text-lg font-bold tracking-[0.1em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] text-stroke-white"
                />
              </div>
            </div>
            <div className="text-white font-inter text-sm lg:text-lg flex justify-center gap-[27rem] ">
              <a href="https://drive.google.com/file/d/1J6sevdwuUYQBVIGIBPI6u5cpV5kmtli1/view?usp=sharing" target="_blank">
                <ShimmerButton
                  className=" hidden md:block hover:cursor-none absolute rounded-3xl border border-[#4c4c4c] px-4 py-2 w-40 lg:w-48 lg:left-[12rem] xl:left-[20rem] 2xl:left-[29rem] bottom-[5rem] z-10 left-[8rem]"
                  background="rgba(13, 13, 13, 1)"
                  onMouseEnter={() => handleMouseEnter("link")}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <span className="">Brochure</span>
                </ShimmerButton>
              </a>
              <Image
                src={bgimg}
                alt="background image"
                className=" object-fill z-0  mx-auto w-[100%] max-w-[300px] md:max-w-[430px] bottom-[0rem] md:bottom-[10rem] 2xl:max-w-[500px] xl:bottom-[1rem] md:w-[45%] absolute left-[62%] md:left-[45%] xl:left-[50%] transform -translate-x-1/2"
              />
              <a href="https://drive.google.com/file/d/1q6BXkXBxnHAwhRF5D8w1MwJc6ZJNbWUq/view?usp=sharing" target="_blank">
                <ShimmerButton
                  className="bg-[#0d0d0d] rounded-3xl hover:cursor-none hidden md:block border border-[#4c4c4c] px-4 py-2 w-40 lg:w-48 lg:right-[12rem] xl:right-[20rem] 2xl:right-[29rem] absolute bottom-[5rem] z-10 right-[8rem] "
                  background="rgba(13, 13, 13, 1)"
                  onMouseEnter={() => handleMouseEnter("link")}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <span>Schedule</span>
                </ShimmerButton>
              </a>
            </div>
          </div>
          <BackgroundBeams className=" z-[-1]" />
        </div>
        <div className="mt-[23.2rem] md:mt-[35rem] lg:pl-8">
          <h1 className="text-white  text-[3rem]  font-black font-sans text-start p-4 px-3 md:flex md:text-[3rem] lg:text-[4rem] xl:text-[5rem]  ">
            Welcome to
            <p className="bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-[#40E0D0]  text-[3rem] lg:text-[4rem] xl:text-[5rem]   md:ml-4 font-black">
              XACTITUDE&#39;25
            </p>
          </h1>
        </div>
        <div
          className="  flex flex-col antialiased   dark:bg-[#0d0d0d] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden lg:mt-10"
          onClick={() => {
            router.push("/events");
          }}
          // Reset hover type
        >
          <div
            onMouseEnter={() => handleMouseEnter("card")} // Set hover type to 'text'
            onMouseLeave={() => handleMouseLeave()}
            className="hover:cursor-none"
          >
            <Marquee
              pauseOnHover={true}
              className="[--duration:50s] hover:cursor-none"
            >
              {eventsData.map((event) => (
                <EventCard
                  key={event.name}
                  title={event.name}
                  image={event.image}
                />
              ))}
            </Marquee>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 hover:cursor-none dark:bg-[#0d0d0d] w-[95%] relative left-[-25px] lg:left-[-30px] xl:left-[-40px] opacity-50 " />
        </div>
        <div className="mt-28 flex flex-col md:flex-row gap-[2rem] md:gap-[1rem] text-white font-inter lg:mx-[5rem] ">
          <div className="bg-[#181818] p-4 rounded-[2rem] mx-6  md:w-[50%]">
            <h1 className="text-3xl m-3 lg:text-4xl">A Premier Tech Stage</h1>
            <p className="mx-3 text-lg lg:text-xl mt-10">
              Xactitude is the ultimate platform where tech enthusiasts from
              colleges across the region unite to exchange ideas, collaborate,
              and innovate.
            </p>
            <Image
              src={info1}
              alt="info1"
              className="w-40 h-40 relative left-[60%] lg:left-[70%] xl:left-[80%] m-0 md:bottom-0"
            ></Image>
          </div>
          <div className="bg-[#181818] p-4 rounded-[2rem] mx-6   md:w-[50%]">
            <h1 className="text-3xl m-3 lg:text-4xl">
              Showcase Creativity and Passion
            </h1>
            <p className="mx-3 text-lg lg:text-xl mt-10">
              An incredible opportunity to demonstrate your technical skills,
              unleash your creativity, and share your passion for groundbreaking
              technology with like-minded individuals.
            </p>
            <Image
              src={info2}
              alt="info2"
              className="w-40 h-40 relative left-[60%] lg:left-[70%] xl:left-[80%] m-0 md:bottom-0"
            ></Image>
          </div>
        </div>
        <div className="text-white font-inter text-sm mt-[5rem] flex justify-evenly ">
          <a href="https://drive.google.com/file/d/1J6sevdwuUYQBVIGIBPI6u5cpV5kmtli1/view?usp=sharing" target="_blank">
            <ShimmerButton
              className=" bg-[#0d0d0d] hover:cursor-none md:hidden rounded-3xl border border-[#4c4c4c] w-40"
              background="rgba(13, 13, 13, 1)"
              onMouseEnter={() => handleMouseEnter("link")}
              onMouseLeave={() => handleMouseLeave()}
            >
              <span className="">Brochure</span>
            </ShimmerButton>
          </a>
          <a href="https://drive.google.com/file/d/1q6BXkXBxnHAwhRF5D8w1MwJc6ZJNbWUq/view?usp=sharing" target="_blank">
            <ShimmerButton
              className="bg-[#0d0d0d] md:hidden rounded-3xl hover:cursor-none border border-[#4c4c4c] w-40"
              background="rgba(13, 13, 13, 1)"
              onMouseEnter={() => handleMouseEnter("link")}
              onMouseLeave={() => handleMouseLeave()}
            >
              <span>Schedule</span>
            </ShimmerButton>
          </a>
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
        <Events setHoverType={setHoverType} />
      </div>
      <Footer />
    </div>
  );
}
