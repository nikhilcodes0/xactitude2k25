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
    events: string[];
  }

  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

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

  const { name, college, wNo, email, events } = registrationData;

  return (
    <div className={`bg-[#0d0d0d] text-white font-sans mb-10 md:mx-5`}>
      <Progressbar currentStep={2} totalSteps={3} />

      <div>
        <p className={`text-sm text-center md:hidden text-gray-200 ${inter.className}`}>
          Great choice! Confirm and proceed
        </p>
      </div>
      <h1 className={`text-[1.7rem] lg:text-[2.7rem] font-antonio font-bold text-white text-center mx-2 my-12 `}>
        REGISTRATION SUMMARY
      </h1>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mx-3">
        {events.map((event: string, index: number) => (
          <SummeryCard
            key={index}
            title={event}
            image={eventImages[event as keyof typeof eventImages] || ""}
            no={eventsData[index].no}
          />
        ))}
      </div>
      <div className={`mx-3 md:mx-6 ${inter.className} my-6`}>
        <h2 className="text-[1.6rem] lg:text-[2.5rem] xl:text-[3rem] font-bold my-6 font-antonio">Participant Details:</h2>
        <div className="mx-1 text-lg md:text-xl xl:text-2xl">
          <p className="text-sm font-bold"><span className="font-bold text-base text-[#07B6B0] mr-2">Name:</span> {name}</p>
          <p className="text-sm font-bold"><span className="font-bold text-base text-[#07B6B0] mr-2">College:</span> {college}</p>
          <p className="text-sm font-bold"><span className="font-bold text-base text-[#07B6B0] mr-2">WhatsApp No:</span> {wNo}</p>
          <p className="text-sm font-bold"><span className="font-bold text-base text-[#07B6B0] mr-2">Email:</span> {email}</p>
          {/* {teamName && <p className="text-sm font-bold"><span className="font-bold text-base text-[#07B6B0] mr-2">Team Name:</span> {teamName}</p>} */}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center my-4 mx-3 md:mx-6">
          <h1 className="text-[1.6rem] lg:text-4xl text-white font-bold font-antonio">Total Amount</h1>
          <p className="text-[1.6rem] lg:text-4xl text-white font-bold font-antonio">Rs.300</p>
        </div>
        <hr className="opacity-50 mx-3 md:mx-6" />
      </div>
      <div className="flex gap-3 mx-3 md:mx-6 my-5 items-center">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          checked={isChecked}
          className="w-8 h-8 md:w-7 md:h-7 xl:w-6 xl:h-6 rounded-xl accent-[#2FFF60]"
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor="agree"
          className={`text-white pl-4 text-sm xl:text-xl ${inter.className}`}
          
          >
          I will take a screenshot of the payment and upload it in the following
          section.
        </label>
      </div>
      <div className="mx-3 flex flex-col md:flex-row gap-4 lg:w-3/4 xl:w-[60%] lg:mx-auto lg:gap-8">
      <a href="https://portal.kristujayanti.edu.in/event-xactitude-2025" className="w-full" target="_blank">
        <button className={`bg-[#07B6B0] text-lg font-semibold py-3 rounded-lg w-full mb-4 cursor-pointer font-inter ${isChecked ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
          disabled ={!isChecked}
        >
          PAY NOW
        </button>
      </a>
        <button 
          className={`bg-[#07B6B0] text-lg font-semibold py-3 rounded-lg w-full mb-4 cursor-pointer font-inter ${isChecked ? "opacity-100" : "opacity-50 cursor-not-allowed"}`}
          onClick={() => router.push('/transummary')}
          disabled={!isChecked}
          >
          PROCEED
        </button>
      </div>
      <a
        href="/reg"
        className="text-white text-xl text-center font-semibold mx-4 my-4 cursor-pointer w-full"
      >
         &larr; {""}<span className={`underline underline-offset-4 py-4 font-inter`}>Edit Events</span>
      </a>
    </div>
  );
};

export default RegSummery;