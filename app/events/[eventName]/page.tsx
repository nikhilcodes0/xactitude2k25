import React from "react";
import eventsData from "../eventsData";
import Image from "next/image";
import localFont from "next/font/local";
import calendar from "../../assets/calendar.png";
import alarm from "../../assets/alarm.svg";

import person from "../../assets/person.svg";
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
    <div className="bg-white font-sans py-4">
      <div className="p-4">
        <h1 className={`text-7xl font-black capitalize ${anton.className}`}>
          {event.name}
        </h1>
        <div className="flex mt-8 gap-7 items-center">
          {event?.image && (
            <Image
              src={event.image}
              alt={event?.name ?? ""}
              width={500}
              height={500}
            />
          )}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex items-center gap-2 pt-10">
          <Image src={calendar} alt="calendar" width={25} height={25} />
          <p className="text-base text-gray-500 font-bold">
            Starts at {event.date}
          </p>
        </div>
      </div>
      <hr className="my-10 w-[93%] mx-auto bg-slate-300 h-[2px]" />
      <div className="p-4 py-10">
        <h2
          className={`text-4xl font-semibold capitalize mb-10 ${inter.className}`}
        >
          About the Event
        </h2>
        <p className={`text-lg text-black ${inter.className}`}>{event.about}</p>
      </div>
      <hr className="my-10 w-[93%] mx-auto bg-slate-300 h-[2px]" />
      <div className="p-4">
        <div className="flex justify-around px-6">
          <div className="flex items-center gap-2">
            <Image src={alarm} alt="alarm" width={25} height={25} />
            <p>{event.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={person} alt="person" width={22} height={22} />
            <p>{event.venue}</p>
          </div>
        </div>
      </div>
      <div className="p-4 py-10 pt-20">
        <h2
          className={`text-4xl font-semibold capitalize mb-10 ${inter.className}`}
        >
          Guidelines
        </h2>
        <ul className={`text-lg pl-4 text-black ${inter.className}`}>
          {event.guidelines?.map((guideline, index) => (
            <li key={index} className="list-disc">{guideline}</li>
          ))}
        </ul>
      </div>
      <div className="p-4 py-10 pt-20">
        <PulsatingButton  className="w-full dark">
          <Link href={`/reg`}>
            Register Now
          </Link>
        </PulsatingButton>
      </div>
    </div>
  );
};

export default EventPage;
