"use client";

import React, { useEffect, useState } from "react";
import Progressbar from "../components/progressbar";
import SummeryCard from "../components/summerycard";
import weblynx from "../assets/weblynx.png";
import cine from "../assets/cine.png";
import fc24 from "../assets/fc24.png";
import quizz from "../assets/quizz.png";
import { useRouter } from "next/navigation";

const eventImages = {
  Weblynx: weblynx,
  Cinephoria: cine,
  FC24: fc24,
  "Quizz Buzz": quizz,
};

const RegSummery = () => {
  const [registrationData, setRegistrationData] = useState<any>(null);
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
      <div className="bg-black text-white font-sans p-6">
        <h1 className="text-2xl font-bold text-center">Loading...</h1>
      </div>
    );
  }

  const { name, college, wNo, email, teamName, events } = registrationData;

  return (
    <div className="bg-black text-white font-sans">
      <Progressbar currentStep={2} totalSteps={3} />

      <div>
        <p className="text-md text-center text-gray-200">
          Great choice! Confirm and proceed
        </p>
      </div>
      <h1 className="text-4xl font-bold text-white text-center mx-2 my-8">
        Registration Summary
      </h1>
      <div>
        {events.map((event: string, index: number) => (
          <SummeryCard
            key={index}
            title={event}
            image={eventImages[event as keyof typeof eventImages] || ""}
            no={`0${index + 1}`}
          />
        ))}
      </div>
      <div className="mx-3">
        <h2 className="text-2xl font-bold my-6">Participant Details:</h2>
        <p className="text-lg">Name: {name}</p>
        <p className="text-lg">College: {college}</p>
        <p className="text-lg">WhatsApp No: {wNo}</p>
        <p className="text-lg">Email: {email}</p>
        {teamName && <p className="text-lg">Team Name: {teamName}</p>}
      </div>
      <div>
        <div className="flex justify-between items-center my-4 mx-3">
          <h1 className="text-2xl text-white font-bold">Total Amount</h1>
          <p className="text-2xl text-white font-bold">Rs. {events.length * 100}</p>
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
          className="text-white text-lg"
        >
          I will take a screenshot of the payment and upload it in the following
          section.
        </label>
      </div>
      <div className="mx-3 flex flex-col gap-4">
        <button className="bg-[#07B6B0] text-xl font-semibold py-3 rounded-lg w-full my-4 cursor-pointer">
          PAY NOW
        </button>
        <button 
          className="bg-[#07B6B0] text-xl font-semibold py-3 rounded-lg w-full my-4 cursor-pointer"
          onClick={() => router.push('/transummary')}
          >
          PROCEED
        </button>
      </div>
      <a
        href="/reg"
        className="text-white text-xl font-semibold mx-3 my-4 cursor-pointer"
      >
        ﹤<span className="underline underline-offset-4">Edit Events</span>
      </a>
    </div>
  );
};

export default RegSummery;