"use client";

import React, { useState } from "react";
import Select from "../components/Select";
import weblynx from "../assets/weblynx.png";
import cine from "../assets/cine.png";
import fc24 from "../assets/fc24.png";
import quizz from "../assets/quizz.png";
import {
  registerParticipant,
  registerTeam,
} from "../../src/utils/firestoreHelpers";
import Group from '../components/group';

const initialEvents = [
  { id: 1, title: "Weblynx", image: weblynx, selected: false },
  { id: 2, title: "Cinephoria", image: cine, selected: false },
  { id: 3, title: "FC24", image: fc24, selected: false },
  { id: 4, title: "Quizz Buzz", image: quizz, selected: false },
];

const Reg = () => {
  const [events, setEvents] = useState(initialEvents);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [wNo, setWNo] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");

  const handleSelectClick = (name: string) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.title === name ? { ...event, selected: !event.selected } : event
      )
    );
  };

  const selectedCount = events.filter((event) => event.selected).length;
  console.log('Selected Events:', events.filter((event) => event.selected)); // Log to see selected events

  // Register handler
  const handleRegister = async () => {
    const selectedEvents = events
      .filter((event) => event.selected)
      .map((e) => e.title);
    if (!name || !college || !email || !wNo) {
      alert("Please fill all the fields!");
      return;
    }

    // Register Participant
    const participantDetails = {
      events: selectedEvents,
      mail: email,
      id: `${name.replace(/\s+/g, "")}_${college}`,
      tId: Math.floor(Math.random() * 1000),
      team: teamName,
      wNo,
    };

    try {
      await registerParticipant(college, name, participantDetails);

      // Register Team (if applicable)
      if (teamName) {
        await registerTeam(college, teamName, name);
      }

      alert("Registration Successful!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <div>
        <h1 className="text-[2rem] font-bold pt-7 pb-3 px-3">
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
      <div className="flex gap-2 mx-3 items-center my-4">
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
          }`}
        >
          {events.filter((event) => event.selected).length} events selected
        </label>
      </div>

      {/* User Details */}
      <div className="mx-3 mt-16 bg-black text-white">
        <h1 className="text-[2rem] font-bold mb-16">ENTER YOUR DETAILS</h1>
        <div className="flex flex-col gap-4 text-black">
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
          <input
            type="text"
            placeholder="Team Name (if any)"
            className="p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
      </div>

      {/* Group Events */}
      <div className="mx-3 mt-16 bg-black text-white">
        <h1 className="text-[2rem] font-bold mb-16 text-center">GROUP EVENTS</h1>
        <div className="flex flex-col gap-4 bg-black text-white">
          <Group 
            no="01"
            title="Weblynx"
            image={weblynx}
            team={true}
          />
          <Group 
            no="02"
            title="Cinephoria"
            image={cine}
            team={false}
          />
        </div>
      </div>
      <hr className='mx-3 opacity-60 py-4' />
      <div className='my-3 flex flex-col items-center justify-center'>
            <div className='flex  gap-3 mx-3 items-center'>
                <input type="checkbox" name="agree" id="" className='w-8 h-8 rounded-xl accent-[#2FFF60]'/>
                <label htmlFor="agree" className='text-white text-l'>I confirm that I have read and accept the terms and conditions.</label>
            </div>   
        </div>
      
      {/* Submit Button */}
      <div className="my-3 flex flex-col items-center justify-center">
        <button
          className="bg-[#07B6B0] text-xl font-bold py-3 rounded-lg w-[90%] my-6 cursor-pointer"
          onClick={handleRegister}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Reg;
