import React from "react";
import eventsData from "../eventsData";
import Image from "next/image";
import localFont from "next/font/local";

import calendar from "../../assets/calendar.png";
import RippleButton from "@/components/ui/ripple-button";
import person from "../../assets/person.png";
import { Inter } from "next/font/google";
import PulsatingButton from "@/components/ui/pulsating-button";
import Link from "next/link";

// Import custom font
const anton = localFont({
  src: "../../fonts/Anton-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Define the PageProps interface
interface PageProps {
  params: Promise<{ eventName: string }>;
}

// Dynamic route handler
const EventPage = async ({ params }: PageProps) => {
  // Destructure the eventName from params
  const { eventName } = await params;

  // Find the event data
  const event = eventsData.find((event) => event.slug === eventName);

  // Handle case where the event is not found
  if (!event) {
    return (
      <div className="bg-white font-sans p-4">
        <h1 className="text-red-500">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans py-4 lg:px-10">
      <div className="p-4 md:flex md:justify-between md:items-center">
        <h1 className={`text-[3.9rem] font-black  md:text-[6rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[9rem] ${anton.className}`}>
          {event.name}
        </h1>
        <div className="flex mt-8 gap-7 items-center md:justify-center">
          {event?.image && (
            <Image
              src={event.image}
              alt={event?.name ?? ""}
              width={500}
              height={500}
              className="md:w-[400px] lg:w-[500px] lg:h-[500px] xl:w-[80%] xl:object-cover 2xl:w-full"
            />
          )}
        </div>
      </div>
      <hr className="my-10 w-[93%] mx-auto bg-slate-300 h-[2px]" />
      <div className="p-4 py-10">
        <h2
          className={`text-4xl font-semibold capitalize mb-10 lg:text-5xl xl:text-6xl ${inter.className}`}
        >
          About the Event
        </h2>
        <p className={`text-lg text-black ${inter.className} lg:text-xl xl:text-2xl`}>{event.about}</p>
      </div>
      <hr className="my-10 w-[93%] mx-auto bg-slate-300 h-[2px]" />
      <div className="p-4">
        <div className="flex justify-between md:justify-around px-2">
          <div className="flex items-center gap-2">
            <Image src={calendar} alt="alarm" width={25} height={25} className="lg:w-[30px]"/>
            <p className="text-[15px] md:text-[20px] lg:text-[30px]">{event.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={person} alt="person" width={19} height={19} className="lg:w-[30px]"/>
            <p className="md:text-[20px] lg:text-[30px]">{event.venue}</p>
          </div>
        </div>
      </div>
      <div className="p-4 py-10 pt-20">
        <h2
          className={`text-4xl font-semibold capitalize mb-10 lg:text-5xl ${inter.className}`}
        >
          Guidelines
        </h2>
        <ul className={`text-lg lg:text-xl pl-4 text-black ${inter.className}`}>
          {event.guidelines?.map((guideline, index) => (
            <li key={index} className="list-disc lg:mt-4">
              {guideline}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex px-6 py-4 gap-10 justify-center items-center">
        <div className="">
          <RippleButton  className="light w-full md:w-[12rem] lg:w-[13rem] lg:p-4">
            <Link href={`/events`} className="font-semibold lg:text-lg">Go Back</Link>
          </RippleButton>
        </div>
        <div className="">
          <PulsatingButton className="w-[10rem] dark md:w-[15rem] lg:w-[20rem] lg:p-4">
            <Link href={`/soon`} className="font-semibold lg:text-lg">Register Now</Link>
          </PulsatingButton>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
