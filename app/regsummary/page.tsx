"use client";

import React, { useEffect, useState } from "react";
import Progressbar from "../components/progressbar";
import SummeryCard from "../components/summerycard";
import eventsData from "../events/eventsData";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

const eventImages = {
  "Hack-N-Build": eventsData[0].image,
  "IT Manager": eventsData[1].image,
  "CodeShift": eventsData[2].image,
  "Weblynx": eventsData[3].image,
  "Xploit": eventsData[4].image,
  "DataQuest": eventsData[5].image,
  "Agora": eventsData[6].image,
  "Quiztacular": eventsData[7].image,
  "Cinephoria": eventsData[8].image,
  "BGX": eventsData[9].image,

};

// fonts


const inter = localFont({
  src: "../fonts/Inter.otf",
  weight: "400",
  style: "normal",
  variable: "--font-inter",
});
///

const RegSummery = () => {
  interface RegistrationData {
    name: string;
    college: string;
    wNo: string;
    email: string;
    teamName?: string;
    events: string[];
  }

  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
  const router = useRouter();

  // Load registration data from sessionStorage
  useEffect(() => {
    const storedData = sessionStorage.getItem("registrationData");
    if (storedData) {
      setRegistrationData(JSON.parse(storedData));
    }
  }, []);

  if (!registrationData) {
    return (
      <div className="bg-[#0d0d0d] text-white font-sans p-6">
        <h1 className="text-2xl font-bold text-center">Loading...</h1>
      </div>
    );
  }

  const { name, college, wNo, email, teamName, events } = registrationData;

  return (
    <div className={`bg-[#0d0d0d] text-white font-sans md:mx-20`}>
      <Progressbar currentStep={2} totalSteps={3} />

      <div>
        <p className={`text-md text-center md:hidden text-gray-200 ${inter.className}`}>
          Great choice! Confirm and proceed
        </p>
      </div>
      <h1 className={`text-[2.7rem] font-antonio font-bold text-white text-center mx-2 my-8 `}>
        REGISTRATION SUMMARY
      </h1>
      <div className="md:grid grid-cols-3 gap-4 mx-3">
        {events.map((event: string, index: number) => (
          <SummeryCard
            key={index}
            title={event}
            image={eventImages[event as keyof typeof eventImages] || ""}
            no={eventsData[index].no}
          />
        ))}
      </div>
      <div className={`mx-3 ${inter.className} my-6`}>
        <h2 className="text-[2rem] font-bold my-6 font-antonio">Participant Details:</h2>
        <p className="text-lg">Name: {name}</p>
        <p className="text-lg">College: {college}</p>
        <p className="text-lg">WhatsApp No: {wNo}</p>
        <p className="text-lg">Email: {email}</p>
        {teamName && <p className="text-lg">Team Name: {teamName}</p>}
      </div>
      <div>
        <div className="flex justify-between items-center my-4 mx-3">
          <h1 className="text-3xl text-white font-bold font-antonio">Total Amount</h1>
          <p className="text-3xl text-white font-bold font-antonio">Rs.300</p>
        </div>
        <hr className="opacity-50 mx-3" />
      </div>
      <div className="flex gap-3 mx-3 my-5 items-center">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          className="w-8 h-8 rounded-xl accent-[#2FFF60]"
        />
        <label
          htmlFor="agree"
          className={`text-white text-lg ${inter.className}`}>
          I will take a screenshot of the payment and upload it in the following
          section.
        </label>
      </div>
      <div className="mx-3 flex flex-col gap-4 ">
        <button className={`bg-[#07B6B0] text-xl font-semibold py-3 rounded-lg w-full my-4 cursor-pointer font-inter`}>
          PAY NOW
        </button>
        <button 
          className={`bg-[#07B6B0] text-xl font-semibold py-3 rounded-lg w-full my-4 cursor-pointer font-inter`}
          onClick={() => router.push('/transummary')}
          >
          PROCEED
        </button>
      </div>
      <a
        href="/reg"
        className="text-white text-xl font-semibold mx-3 my-4 cursor-pointer"
      >
        ﹤<span className={`underline underline-offset-4 font-inter`}>Edit Events</span>
      </a>
    </div>
  );
};

export default RegSummery;