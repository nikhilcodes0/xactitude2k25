import React from "react";
import Image, { StaticImageData } from "next/image";
// import Events from '../components/Events'
import Nav from "./components/Nav";
import backdrop from "./assets/X.png";
import weblynx from "./assets/weblynx.png";
import cine from "./assets/cine.png";
import fc24 from "./assets/fc24.png";
import quizz from "./assets/quizz.png";
import bgimg from "./assets/bg.png";
import itm from "./assets/itm.png";
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

const events = [
  { title: "Weblynx", image: weblynx },
  { title: "Cinephoria", image: cine },
  { title: "FC24", image: fc24 },
  { title: "Quizz Buzz", image: quizz },
  { title: "IT Manager", image: itm },
];

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
    <div className=" rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <Image src={image} alt={title} className="object-cover w-full h-full" />
      <p
        className={`${jersey.className} text-neutral-950 text-3xl font-bold bg-green-400 w-full text-center`}
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
          Welcome to{" "}
          <p className="bg-gradient-to-b bg-clip-text text-transparent from-neutral-200 to-[#40E0D0] font-extrabold">
            XACTITUDE -
          </p>
        </h1>
      </div>
      <div className=" rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Marquee pauseOnHover={true} className="[--duration:10s]">
          {events.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              image={event.image}
            />
          ))}
        </Marquee>
      </div>
      <div className="mt-20">
        <p className="text-white  text-2xl font-medium font-sans text-start p-4 px-12">
          <span className="font-black">Xactitude</span> is the premier stage
          where tech enthusiasts from colleges across the region come together
          to showcase their skills, creativity, and passion for technology.
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
