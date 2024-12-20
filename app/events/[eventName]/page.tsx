import React from "react";
import eventsData from "../eventsData";
import Image from "next/image";
import localFont from "next/font/local";
import calendar from "../../assets/calendar.png";
import alarm from "../../assets/alarm.svg";
import details from "../../assets/details.svg";
import hourglass from "../../assets/hourglass.svg";
import person from "../../assets/person.svg";
import { Inter } from "next/font/google";

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
  const event = eventsData.find((event) => event.name === eventName);

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
        <h1 className={`text-8xl font-black capitalize ${anton.className}`}>
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
        <h2 className={`text-4xl font-semibold capitalize mb-10 ${inter.className}`}>About the Event</h2>
        <p className={`text-lg text-black ${inter.className}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit dolorem saepe distinctio amet. Obcaecati saepe omnis earum maxime velit totam, a blanditiis accusantium. Vero, maiores architecto. Deleniti, illo libero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, sed.
        </p>
      </div>
      <hr className="my-10 w-[93%] mx-auto bg-slate-300 h-[2px]" />
      <div className="p-4">
        <div className="flex justify-between px-4">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-2">
              <Image src={alarm} alt="alarm" width={25} height={25} />
              <p>Jan 23 - Jan 30</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={person} alt="person" width={22} height={22} />
              <p>100 Registered</p>
            </div>
          </div>
          <div className="flex gap-7 flex-col">
            <div className="flex items-center gap-2">
              <Image src={hourglass} alt="hourglass" width={20} height={20} />
              <p>Register before 20 Jan</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={details} alt="details" width={25} height={25} />
              <p>Some Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 py-10 pt-28">
        <h2 className={`text-4xl font-semibold capitalize mb-10 ${inter.className}`}>
          Guidelines
        </h2>
        <p className={`text-lg text-black ${inter.className}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit dolorem saepe distinctio amet. Obcaecati saepe omnis earum maxime velit totam, a blanditiis accusantium. Vero, maiores architecto. Deleniti, illo libero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, reprehenderit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, sed.
        </p>
      </div>
    </div>
  );
};

export default EventPage;
