"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Progressbar from '../components/progressbar';
import success from '../assets/Successicon.png';
import upload from '../assets/Uploadicon.png';
import { useRouter } from 'next/navigation';
import { updateEventData, registerParticipant, registerTeam } from '../../src/utils/firestoreHelpers'; // Import the required Firebase functions

const Transummery = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | null>(null);
  const [transactionId, setTransactionId] = useState('');
  const router = useRouter();

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleTransactionIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionId(event.target.value);
  };

  const handleFinish = async () => {
    // Get the session data
    const sessionData = sessionStorage.getItem('registrationData');
    const parsedSessionData = sessionData ? JSON.parse(sessionData) : null;

    if (parsedSessionData && transactionId) {
      // Update the transaction ID in the session data
      parsedSessionData.tId = transactionId;

      // Update the session storage with the new registration data (including updated tId)
      sessionStorage.setItem('registrationData', JSON.stringify(parsedSessionData));

      try {
        // Register the participant in Firebase
        await registerParticipant(parsedSessionData.college, parsedSessionData.name, parsedSessionData);

        // Update the event data for each event the participant is registered for
        for (const event of parsedSessionData.events) {
          await updateEventData(event, parsedSessionData.name, parsedSessionData);
        }

        // If the participant is part of a team, register the team
        if (parsedSessionData.teamName) {
          await registerTeam(parsedSessionData.college, parsedSessionData.teamName, parsedSessionData.name);
        }

        // Success message
        alert("Registration Successful!");
        router.push('/registerd'); // Navigate to the success page or appropriate destination
      } catch (error) {
        console.error("Error during registration:", error);
        alert("There was an error during registration. Please try again.");
      }
    } else {
      alert('Transaction ID and registration data are required.');
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      <Progressbar currentStep={2} totalSteps={3} />
      <div>
        <p className='text-md text-center font-inter text-gray-200'>Finally, verify your payment!</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-24'>
        <Image src={success} alt="Payment Success" />
        <h1 className='text-2xl font-semibold font-inter text-white text-center mx-2 my-8'>Payment Success!</h1>
      </div>
      <div
        className='flex flex-col items-center font-inter justify-center gap-4 border-2 border-dashed border-[#07B6B0] rounded-md p-4 mx-6'
        onDrop={handleFileDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <Image src={upload} alt="Upload Icon" />
        <p className='text-md font-semibold'>
          Drag & drop files or{' '}
          <span
            className='text-[#07B6B0] cursor-pointer underline underline-offset-2'
            onClick={() => document.getElementById('file-input')?.click()}
          >
            Browse
          </span>
        </p>
        <input
          type="file"
          id="file-input"
          className="hidden"
          accept=".jpeg, .png, .pdf, .psd, .ppt"
          onChange={handleFileChange}
        />
        <p className='text-[12px] opacity-70'>Supported formats: JPEG, PNG, PDF, PSD, PPT</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-16 pb-16 gap-4'>
        <input
          type="text"
          placeholder='TRANSACTION ID'
          className="p-2 rounded-md font-inter border-b-[5px] border-[#797a7a]  outline-none text-black w-[90%]"
          value={transactionId}
          onChange={handleTransactionIdChange}
        />
        <button
          className='bg-[#07B6B0] text-white font-inter font-semibold text-xl rounded-md p-3 mt-4 w-[90%]'
          onClick={handleFinish}
        >
          FINISH
        </button>
      </div>
    </div>
  );
};

export default Transummery;