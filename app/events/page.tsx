// import localFont from "next/font/local";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import EventsGroup from "../components/EventsGroup";
import home from "../assets/home.svg";
import eventsData from "./eventsData";
import RippleButton from "@/components/ui/ripple-button";



const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Events = () => {
  return (
    <div className="text-white">
      <div className="w-full bg-white text-black font-sans pl-4 pt-4">
        <RippleButton rippleColor="#ADD8E6">
          <div className="flex items-center gap-2">
            <Image src={home} className="w-4 inline" alt="home" />
            <Link href="/"> Go Back</Link>
          </div>
        </RippleButton>
      </div>
      <div className="bg-white w-full h-80 rounded-b-2xl pl-5 z-10 flex flex-col justify-around overflow-hidden pt-10 lg:relative lg:z-[81] lg:gap-[3rem] 2xl:h-[27rem]">
        <div className="flex gap-3 items-center md:mt-[4rem] lg:mt-0">
          <h1 className="text-black text-8xl font-antonio tracking-[-0.03em] font-black md:text-[9rem] lg:text-[10rem] 2xl:text-[12rem] ">
            Events
          </h1>
          <Image src={arrow} alt="arrow" className="w-14 h-14 pt-4 md:w-[5.5rem] md:h-[5.5rem] md:pl-5" />
        </div>
        <div className="flex gap-10 items-center justify-around md:justify-between">
          <div className="flex gap-3 items-center w-[58%]">
            <p className={`text-6xl text-[#07B6B0] md:text-[7rem] 2xl:text-[11rem] ${inter.className}`}>*</p>
            <p className="text-black font-sans text-sm leading-tight  md:text-[1rem] md:w-[76%] md:pb-8 2xl:w-1/2 2xl:text-[1.2rem]">
              Unleash Your Creativity and Skills by Picking an Event That
              Inspires You
            </p>
          </div>
          <div>
            <p
              className={`text-neutral-400 text-[7rem] md:text-[10rem] opacity-20 font-sans font-black tracking-[-0.03em] relative top-12 right-2 md:top-0 lg:absolute lg:text-[27rem] lg:z-[60 lg:top-[-2rem]`}
            >
              10
            </p>
          </div>
        </div>
      </div>
      <div>
        {eventsData.map((event) => (
          <EventsGroup key={event.name} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
