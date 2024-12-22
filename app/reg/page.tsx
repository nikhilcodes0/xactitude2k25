"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "../components/Select";

import eventsData from "../events/eventsData";
import localFont from "next/font/local";

// import {
//   registerParticipant,
//   registerTeam,
//   updateEventData,
// } from "../../src/utils/firestoreHelpers";
// import { generateParticipantId } from "../../src/utils/firestoreHelpers";
import Group from "../components/group";

const initialEvents = eventsData.map((event) => ({
  id: event.slug,
  title: event.name,
  image: event.image,
  selected: false,
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
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.title === name ? { ...event, selected: !event.selected } : event
      )
    );
  };

  const handleRegister = async () => {
    const selectedEvents = events
      .filter((event) => event.selected)
      .map((e) => e.title);

    if (!name || !college || !email || !wNo) {
      alert("Please fill all the fields!");
      return;
    }

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
      sessionStorage.setItem("registrationData", JSON.stringify(participantDetails));

      // Relaxxx, not updating any data yet

      // // Register participant
      // await registerParticipant(college, name, participantDetails);

      // // Update event data
      // selectedEvents.forEach(async (event) => {
      //   await updateEventData(event, name, participantDetails.id);
      // });

      // // Register team if applicable
      // if (teamName) {
      //   await registerTeam(college, teamName, name);
      // }

      // alert("Registration Successful!");

      // Navigate to /regsummary
      router.push("/regsummary");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <div>
        <h1 className={`${anton.className} text-[2.7rem] font-bold pt-12 pb-3 px-3`}>
          SELECT YOUR EVENTS -
        </h1>
        <hr className="mx-3 opacity-60" />
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-2 gap-3 mx-3 my-6 bg-black text-white">
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
      <div className="mx-3 mt-16 bg-black text-white">
        <h1 className={`text-[2.7rem] font-bold mb-16 ${anton.className}`}>ENTER YOUR DETAILS</h1>
        <div className={`flex flex-col gap-4 text-black ${inter.className} capitalize`}>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Institution"
            className="p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
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
      <div className="mx-3 mt-16 bg-black text-white">
        <h1 className={`text-[2.7rem] font-bold mb-10 ${anton.className}`}>GROUP EVENTS</h1>
        <div className={`flex flex-col gap-4 bg-black text-white ${inter.className}`}>
          {eventsData
            .filter(event => event.team)
            .map((event) => (
              <Group
                no={event.no}
                title={event.name}
                image={event.image}
                team={event.team}
                onTeamNameChange={setTeamName} // Pass setTeamName as a prop
                key={event.slug}
              />
            ))}
        </div>
      </div>
      <hr className="mx-3 opacity-60 py-4" />
      <div className="my-3 flex flex-col items-center justify-center">
        <div className="flex gap-3 mx-3 items-center">
          <input
            type="checkbox"
            name="agree"
            id=""
            className="w-8 h-8 rounded-xl accent-[#2FFF60]"
          />
          <label htmlFor="agree" className={`text-white text-lg ${inter.className}`}>
            I confirm that I have read and accept the terms and conditions.
          </label>
        </div>
      </div>

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
