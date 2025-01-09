import React from "react";
import eventsData from "../eventsData";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import calendar from "../../assets/calendar.png";
import person from "../../assets/person.png";
import { Inter } from "next/font/google";
import PulsatingButton from "@/components/ui/pulsating-button";
import Link from "next/link";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import back from "../../assets/back.png";

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
      <div className="dark font-sans p-4">
        <h1 className="text-red-500">Event not found</h1>
      </div>
    );
  }

  return (
    <div className=" font-sans pt-4 mb-10 lg:px-10 dark text-white">
      <div className="w-full text-black font-sans pl-4 pt-4 md:hidden">
        
        <Link href="/events">
          <button className=" items-center text-white text-center font-semibold justify-center hover:bg-[#40E0D0]  flex gap-2 bg-[#0d0d0d] border-[#40E0D0] border-2 p-2 rounded-full "><Image src={back} className="w-4 invert inline" alt="back" /> Go Back</button>
        </Link>
      </div>
      <nav className="hidden md:block m-4 text-xl">
        <ul className="flex mx-4 justify-between">
          <li>
            <Link href="/" className="text-white hover:text-[#40E0D0]">
              HOME
            </Link>
          </li>
          <li>
            <ul className="flex gap-10 mx-5">
              <li>
                <Link
                  href="/events"
                  className="text-white hover:text-[#40E0D0]"
                >
                  EVENTS
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#40E0D0]">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/reg" className="text-white hover:text-[#40E0D0]">
                  REGISTER
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="p-4 sm:flex sm:justify-between sm:items-center">
        <div className="lg:text-end">
          <h1
            className={`text-[3.9rem] font-black  md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[7rem] ${anton.className}`}
          >
            {event.name}
          </h1>
          <div className="flex justify-end">
            {/* <p className="text-lg hidden md:block lg:text-end  w-[90%] ">{event.description}</p> */}
          </div>
        </div>
        <div className="flex mt-8 gap-7 z-10 items-center md:justify-center shadow-lg w-fit shadow-card">
          {event?.image && (
            <Image
              src={event.image}
              alt={event?.name ?? ""}
              width={500}
              height={500}
              className="md:w-[400px] w-[300px]  xl:w-[80%] xl:object-cover 2xl:w-full opacity-100 rounded-xl"
            />
          )}
        </div>
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={2}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12 hidden md:block xl:top-[-5%]",
          "xl:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
      <hr className="my-10 mx-4 bg-slate-300 h-[2px] opacity-50" />
      <div className="p-4 py-10">
        <h2
          className={`text-4xl font-extralight capitalize mb-10 lg:text-5xl xl:text-6xl ${inter.className}`}
        >
          About the Event
        </h2>
        <p
          className={`text-lg text-white ${inter.className} lg:text-xl w-[95%] xl:text-2xl`}
        >
          {event.about}
        </p>
      </div>
      <hr className="my-10 mx-4  bg-slate-300 h-[2px] opacity-50" />
      <div className="py-4 px-2 md:px-0">
        <div className="flex justify-start gap-7 md:gap-52 md:px-10 px-2">
          <div className="flex items-center gap-2">
            <Image
              src={calendar}
              alt="alarm"
              width={25}
              height={25}
              className="lg:w-[30px] invert"
            />
            <p className="text-[15px] md:text-[20px] lg:text-[30px]">
              {event.date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={person}
              alt="person"
              width={19}
              height={19}
              className="lg:w-[30px] invert"
            />
            <p className="md:text-[20px] lg:text-[30px]">{event.venue}</p>
          </div>
        </div>
      </div>
      <div className="p-4 py-10 pt-20">
        <h2
          className={`text-4xl font-extralight capitalize mb-10 lg:text-7xl ${inter.className}`}
        >
          Guidelines
        </h2>
        <ul
          className={`text-lg lg:text-xl mx-4 lg:w-[70%] pl-4 text-white ${inter.className}`}
        >
          {event.guidelines?.map((guideline, index) => (
            <li key={index} className="list-disc lg:mt-4">
              {guideline}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex px-4 py-4 mb-10 justify-start items-center">
        <div className="mx-4">
          <PulsatingButton className="w-[10rem] dark md:w-[15rem] lg:w-[20rem] lg:p-4">
            <Link href={`/reg`} className="font-semibold lg:text-lg">
              Register Now
            </Link>
          </PulsatingButton>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
