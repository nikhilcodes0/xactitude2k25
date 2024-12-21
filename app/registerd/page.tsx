'use client';

import React, { useEffect, useState } from 'react';
import Progressbar from '../components/progressbar';
import success from '../assets/Successicon.png';
import Image from 'next/image';
import copy from '../assets/content_copy.png';
import whatsapp from '../assets/whatsapp_groups.png';
import Link from 'next/link';
interface ParticipantDetails {
  name: string;
  college: string;
  wNo: string;
  email: string;
  teamName: string;
  events: string[];
  id: string;
  tId: number;
}

const Registerd = () => {
  const [parsedSessionData, setParsedSessionData] = useState<ParticipantDetails | null>(null);

  useEffect(() => {
    const sessionData = sessionStorage.getItem('registrationData');
    if (sessionData) {
      setParsedSessionData(JSON.parse(sessionData));
    }
  }, []);

  if (!parsedSessionData) {
    return (
      <div className="text-white font-sans">
        <Progressbar currentStep={3} totalSteps={3} />
        <div className="flex flex-col items-center justify-center mt-16">
          <Image src={success} alt="Success Icon" />
          <h1 className="text-[2.7rem] font-bold text-[#07B6B0] text-center mx-3 my-8 font-antonio">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white font-sans ">
      <Progressbar currentStep={3} totalSteps={3} />
      <div className="flex flex-col items-center justify-center mt-16">
        <Image src={success} alt="Success Icon" />
        <h1 className="text-[2.7rem] font-bold text-[#07B6B0] text-center mx-2 my-8 font-antonio">Registered</h1>
        <p className="text-xl text-center opacity-70 mx-10 font-inter">
          You&apos;re all set! Get ready to shine at your events. See you there!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 rounded-3xl py-7 my-6 mx-5 shadow-[1px_1px_15px_rgb(0,0,0,0.2)] shadow-slate-700">
        <p className="text-lg font-normal font-inter rounded-xl text-center p-2 bg-slate-50  mx-7 w-[90%]">
          Participant ID
        </p>
        <p className="text-lg font-normal font-inter mx-7">{parsedSessionData.id}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 rounded-3xl py-7 my-5">
        <button className="border-2 font-inter flex items-center gap-2 justify-center border-white text-[#25D366] text-xl font-normal rounded-3xl p-3 w-[90%] mx-6">
          <span>
            <Image src={whatsapp} alt="Copy Icon" />
          </span>
          Whatsapp Link
        </button>
        <button className="border-2 font-inter flex items-center gap-2 justify-center border-white text-xl font-normal rounded-3xl p-3 w-[90%] mx-6">
          <span>
            <Image src={copy} alt="Copy Icon" />
          </span>
          Copy to Clipboard
        </button>
      </div>
      <Link href="/" className="text-white text-2xl font-semibold mx-3 my-4 cursor-pointer opacity-70">
        
        <span className="underline font-inter text-xl underline-offset-4">Home Page</span>
      </Link>
    </div>
  );
};

export default Registerd;