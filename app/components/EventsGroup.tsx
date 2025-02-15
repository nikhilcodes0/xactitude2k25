"use client";

import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jersey = localFont({
  src: "../fonts/Jersey10-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-jersey",
});

interface Props {
  no: string;
  name: string;
  image: string | StaticImageData;
  description: string;
  chips: string[];
  slug: string;
  setHoverType: (type: string | null) => void;
}

const EventsGroup = ({
  no,
  name,
  image,
  description,
  chips,
  slug,
  setHoverType,
}: Props) => {
  const handleMouseEnter = (type: string) => {
    setHoverType(type);
    console.log("card eneters");
  };

  const handleMouseLeave = () => {
    setHoverType(null);
  };
  const router = useRouter();
  return (
    <div
      className=" text-white cursor-pointer"
      onClick={() => router.push(`/events/${slug}`)}
      onMouseEnter={() => handleMouseEnter("card")} // Set hover type to 'text'
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className="my-6 flex justify-between gap-5 p-4 md:gap-[18rem] xl:gap-0 md:pb-0 lg:justify-between">
        <div>
          <h1
            className={`${inter.className} text-[3rem] text-white font-medium opacity-40 md:text-[6rem] leading-none tracking-[0.03em] xl:text-[10rem] xl:font-black 2xl:text-[17rem]`}
          >
            {no}.
          </h1>
        </div>
        <div className="flex  gap-3 flex-col md:gap-[2rem] w-[65%] lg:w-[40%] xl:w-[45%] 2xl:w-[35%]  ">
          <Image
            src={image}
            alt={name}
            className="w-[400px] h-[150px] object-cover md:h-[20rem] md:w-full xl:h-[25rem]"
          />
          <p
            className={`${inter.className} text-sm md:text-[1rem] lg:text-[1.2rem] md:opacity-60 w-fit`}
          >
            {description}
          </p>
          <p
            className={`${jersey.className} text-4xl font-bold w-fit text-stroke-black md:text-[3.5rem] lg:text-[4.4rem] xl:text-[5.5rem] 2xl:text-[6.5rem]`}
          >
            {name}
          </p>
          <div className="flex gap-3 lg:pt-10 w-fit">
            {chips.map((chip: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="text-white font-sans text-center"
              >
                {chip}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <hr className="opacity-30 py-4 w-full mt-[4rem] md:mt-0 md:pb-0" />
    </div>
  );
};

export default EventsGroup;
