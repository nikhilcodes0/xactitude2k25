"use client";

import React from "react";
import Image from "next/image";
import insta from "../assets/insta.png";
import mail from "../assets/mail.png";
import Nav from "../components/Nav";
import college from "../assets/college.png";
import xact from "../assets/xact.png";

function copyPhoneNumber() {
  const phoneNumber = "+919988776655";
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      alert("Phone number copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

const About = () => {
  return (
    <div>
      <Nav/>
      <div className="bg-[#0d0d0d] text-white font-sans mx-6 mt-32 lg:mx-32">
        <h1 className="text-4xl md:text-[4rem] lg:my-[4rem] text-center mt-16 mb-10 font-bold">
          About College
        </h1>
        <Image src={college} alt="bg1" className="h-[300px] w-[1200px] lg:h-[500px] mx-auto my-20" />
        <p className="text-justify mt-3 mb-7 font-inter lg:text-2xl">
          Kristu Jayanti College, founded in 1999, is managed by &quot;BODHI
          NIKETAN TRUST&quot; formed by the members of St. Joseph Province of
          the Carmelites of Mary Immaculate (CMI).
          <br />
          <br />
          The College is affiliated to Bengaluru North University and is
          reaccredited with grade &quot;A++&quot; in 2021 by NAAC in the Third
          Cycle of Accreditation. In the NIRF 2024, Our college has been ranked
          60th place in the top 100 colleges in the country.
          <br />
          <br />
          In the India Today - MDRA survey 2024, Kristu Jayanti College,
          Bengaluru is consecutively ranked as the Best Emerging College of the
          Century at National Level for Commerce, Science, Arts and Social Work.
          At the National level, the survey ranked the college as 4th Best in
          BCA and it is also ranked 3rd Best in BCA programmes among the
          colleges in Bengaluru.
        </p>
        <hr className="opacity-30" />
        <h1 className="text-4xl text-center my-7 font-bold md:text-[4rem] lg:my-[4rem]">About Xactitude</h1>
        <Image src={xact} alt="bg1" className="h-[300px] w-[1200px] lg:h-[500px] mx-auto " />
        <p className="text-justify my-3 font-inter lg:text-2xl">
          Xactitude is the flagship National IT Fest of Department of Computer
          Science (UG), hosted annually as a stage for colleges to compete in a
          wide array of events celebrating technological innovation and
          excellence. This fest aims to uncover and nurture talent in diverse
          domains of Computer Science, equipping participants to shape the
          future.
          <br />
          <br />
          The theme for Xactitude 25, “Revitalizing Tech for Tomorrow,” invites
          future developers to explore and build technology through sustainable,
          ethical, and human-centric approaches. It focuses on breathing new
          life into the current tech landscape to build a future driven by
          ingenuity, inclusivity, and accountability.
          <br />
          <br />
          At Xactitude, it is not just about participating but it is about going
          the extra mile to showcase your best self and be a trailblazer in
          tomorrow&apos;s tech revolution!
        </p>
        <hr className="my-7 opacity-30" />
        <div className="flex justify-between my-16 md:max-w-[60%] lg:max-w-[50%] mx-auto lg:text-2xl">
          <div className="">
            <p className="font-bold my-2 font-inter">
              Contact event organizer?
            </p>
            <p className="my-2 font-inter">Give us a ring</p>
            <a href="tel:+918073243278"
              className="text-2xl font-bold my-2 text-[#40E0D0] cursor-pointer"
              onClick={copyPhoneNumber}
            >
              +918073243278
            </a>
          </div>
          <div className="flex flex-col  ">
            <a href="" className="my-2 font-inter flex gap-1 ">
              {" "}
              <Image src={insta} alt="" className="w-7 invert" /> Instagram
            </a>
            <a href="" className="font-inter flex gap-1 pl-[2px]">
              {" "}
              <Image src={mail} alt="" className="w-6 invert " /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
