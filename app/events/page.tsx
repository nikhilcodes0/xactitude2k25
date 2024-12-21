// import localFont from "next/font/local";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import { Inter } from "next/font/google";
import EventsGroup from "../components/EventsGroup";
import eventsData from "./eventsData";
// const jersey = localFont({
//     src: "../fonts/Jersey10-Regular.ttf",
//     weight: "400",
//     style: "normal",
//     variable: "--font-jersey",
//   });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});



const Events = () => {
  return (
    <div className="text-white">
      <div className="bg-white w-full h-80 rounded-b-2xl pl-5 z-10 flex flex-col justify-around overflow-hidden pt-10">
        <div className="flex gap-3 items-center">
          <h1 className="text-black text-8xl font-antonio tracking-[-0.03em] font-black ">
            Events
          </h1>
          <Image src={arrow} alt="arrow" className="w-14 h-14 pt-4" />
        </div>
        <div className="flex gap-10 items-center justify-around">
          <div className="flex gap-3 items-center">
            <p className={`text-7xl text-[#07B6B0]  ${inter.className}`}>*</p>
            <p className="text-black font-sans text-lg leading-tight">
            Unleash Your Creativity and Skills by Picking an Event That Inspires You
            </p>
          </div>
          <div>
            <p className={`text-neutral-400 text-9xl ${inter.className} font-black tracking-[-0.03em] relative top-12 right-2`}>
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
