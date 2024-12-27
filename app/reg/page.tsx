"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "../components/Select";

import eventsData from "../events/eventsData";
import localFont from "next/font/local";
import Group from "../components/group";
import RippleButton from "@/components/ui/ripple-button";
import Image from "next/image";
import home from "../assets/home-light.svg";
import Link from "next/link";

const initialEvents = eventsData.map((event) => ({
  id: event.slug,
  no: event.no,
  title: event.name,
  image: event.image,
  selected: false,
  team: event.team,
}));

// fonts
const anton = localFont({
  src: "../fonts/Anton-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-anton",
});

const inter = localFont({
  src: "../fonts/Inter.otf",
  weight: "400",
  style: "normal",
  variable: "--font-inter",
});
///

const Reg = () => {
  const [events, setEvents] = useState(initialEvents);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [wNo, setWNo] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");

  const router = useRouter();

  const handleSelectClick = (name: string) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event) =>
        event.title === name ? { ...event, selected: !event.selected } : event
      );
      console.log(updatedEvents);
      return updatedEvents;
    });
  };

  const handleRegister = async () => {

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Number validation regex
    const wNoRegex = /^\d{10}$/;
    // Name validation regex
    const nameRegex = /^[a-zA-Z\s]+$/;

    const selectedEvents = events
      .filter((event) => event.selected)
      .map((e) => e.title);

    if (!name || !college || !email || !wNo) {
      alert("Please fill all the fields!");
      return;
    }

    else if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }
    
    else if (!wNoRegex.test(wNo)) {
      alert("Please enter a valid 10-digit WhatsApp number!");
      return;
    }

    else if (!nameRegex.test(name)) {
      alert("Please enter a valid name!");
      return;
    }

    else {
      const participantDetails = {
        name,
        college,
        wNo,
        email,
        teamName,
        events: selectedEvents,
        id: "",
        tId: "",
      };
  
      try {
        // Save to sessionStorage
        sessionStorage.setItem(
          "registrationData",
          JSON.stringify(participantDetails)
        );

        router.push("/regsummary");
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again.");
      }
    }
  };

  return (
    <div className="bg-[#0D0D0D] text-white font-sans">
      <div className="w-full bg-[#0D0D0D] text-[#0D0D0D] font-sans pl-4 pt-4">
        <RippleButton rippleColor="#ADD8E6" className="dark">
          <div className="flex items-center gap-2">
            <Image src={home} className="w-4 inline" alt="home" />
            <Link href="/events"> Go Back</Link>
          </div>
        </RippleButton>
      </div>
      <div>
        <h1
          className={`${anton.className} text-[2.7rem] font-bold pt-12 pb-3 px-3`}
        >
          SELECT YOUR EVENTS -
        </h1>
        <hr className="mx-3 opacity-60" />
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-2 gap-3 mx-3 my-6 bg-[#0D0D0D] text-white">
        {events.map((event) => (
          <Select
            key={event.id}
            title={event.title}
            image={event.image}
            selected={event.selected}
            onClick={() => handleSelectClick(event.title)}
          />
        ))}
      </div>

      {/* Selected Count */}
      <div className={`flex gap-2 mx-3 items-center my-4 ${inter.className}`}>
        <input
          type="radio"
          checked={events.some((event) => event.selected)}
          readOnly
          className="w-5 h-5 accent-[#2FFF60]"
        />
        <label
          className={`text-xl ${
            events.some((event) => event.selected)
              ? "text-[#2FFF60]"
              : "text-white"
          } `}
        >
          {events.filter((event) => event.selected).length} events selected
        </label>
      </div>

      {/* User Details */}
      <div className="mx-3 mt-16 bg-[#0D0D0D] text-white">
        <h1 className={`text-[2.7rem] font-bold mb-16 ${anton.className}`}>
          ENTER YOUR DETAILS
        </h1>
        <div
          className={`flex flex-col gap-4 text-black ${inter.className} capitalize`}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <select
              name="colleges"
              id="colleges"
              className="p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none w-full text-gray-400"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            >
              <option value="" disabled>
                Select your college
              </option>
              <option value="Kristu Jayanti College">Kristu Jayanti College</option>
              <option value="Saint Joseph's College of Commerce">Saint Joseph&apos;s College of Commerce</option>
              <option value="Saint Joseph's College">Saint Joseph&apos;s College</option>
              <option value="Christ University Central Campus">Christ University Central Camus</option>
              <option value="Jain University">Jain University</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none"
            value={wNo}
            onChange={(e) => setWNo(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email ID"
            className="p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Group Events */}
      <div className="mx-3 mt-16 bg-[#0D0D0D] text-white">
        <h1 className={`text-[2.7rem] font-bold mb-10 ${anton.className}`}>
          GROUP EVENTS
        </h1>
        <div
          className={`flex flex-col gap-4 bg-[#0D0D0D] text-white ${inter.className}`}
        >
           {events
      .filter((event) => event.selected)
      .filter((event) => eventsData.find((e) => e.slug === event.id)?.team)
      .length === 0 ? (
      <p className="text-white text-left pl-1">No group event selected</p>
    ) : (
      events
        .filter((event) => event.selected)
        .filter((event) => eventsData.find((e) => e.slug === event.id)?.team)
        .map((event) => (
          <Group
            key={event.id}
            no={""}
            title={event.title}
            image={event.image}
            team={event.team}
            onTeamNameChange={setTeamName}
          />
        ))
    )}
        </div>
      </div>
      <hr className="mx-3 opacity-60 py-4 mt-10" />

      {/* Submit Button */}
      <div className="my-3 flex flex-col items-center justify-center">
        <button
          className={`bg-[#07B6B0] text-xl font-bold py-3 rounded-lg w-[90%] my-6 cursor-pointer font-inter`}
          onClick={handleRegister}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Reg;
