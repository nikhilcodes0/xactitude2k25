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
import { Timeline } from "@/components/ui/timeline";
import Events from "./components/Events";

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
    <div className=" rounded-md flex flex-col antialiased  justify-center  overflow-hidden ">
      <Image src={image} alt={title} className="object-cover w-[200px] h-[200px] rounded-xl" />
      <p
        className={`${jersey.className} text-neutral-950 text-3xl font-bold bg-green-400 w-full text-center capitalize`}
      >
        {title}
      </p>
    </div>
  );
};

export default function Page() {
  const data = [
    {
      title: "Register and Gear Up",
      content: (
        <div>
          <p className="text-neutral-200 text-xl md:text-sm font-normal mb-8 mt-4 w-[70%]">
            Sign up for the fest and select your favorite events.
          </p>
        </div>
      ),
    },
    {
      title: "Connect and Compete",
      content: (
        <div>
          <p className="text-neutral-200 text-xl md:text-sm font-normal mb-8 mt-4 w-[70%]">
            Dive into exciting challenges, solve problems
          </p>
        </div>
      ),
    },
    {
      title: "Win and Celebrate",
      content: (
        <div>
          <p className="text-neutral-200 text-xl md:text-sm font-normal mb-8 mt-4 w-[70%]">
            Claim your prizes, earn recognition, and celebrate your achievements
          </p>
        </div>
      ),
    },
  ];

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
              <h1 className="absolute left-1/2 -top-28 transform -translate-x-1/2 -translate-y-1/2 text-center text-[10rem] font-humane bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#40E0D0] font-extrabold">
                XACTITUDE
              </h1>
            </div>
            <div className={`${meraPro.className} relative bottom-10`}>
              <VelocityScroll
                text="Revitalizing tech for tomorrow. "
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
          
        </div>
      </div>
      <div className="mt-36">
        <h1 className="text-white  text-[4rem] font-black font-antonio text-start p-4 px-12">
          Welcome to
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-[#40E0D0] font-black">
            XACTITUDE 
          </p>
        </h1>
      </div>
      <div className=" rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Marquee pauseOnHover={true} className="[--duration:20s]">
          {eventsData.map((event) => (
            <EventCard
              key={event.name}
              title={event.name}
              image={event.image}
            />
          ))}
        </Marquee>
      </div>
      <div className="mt-20">
        <p className="text-white  text-2xl font-medium font-sans text-start p-4 px-12">
          <span className="font-black">XACTITUDE</span> is the ultimate stage for students to ignite their potential, unleash their skills, and shine before a dynamic crowd of colleges and fiercely spirited competitors.
        </p>
      </div>
      <div className="mt-32">
        <p className="text-white  text-7xl font-black font-antonio text-start p-4 px-12">
          The Process
        </p>
        <hr className="border-white border-1 w-[95%] mx-auto opacity-50 my-2" />
      </div>
      <div>
        <Timeline data={data} />
      </div>
      <Events />
    </div>
  );
}
