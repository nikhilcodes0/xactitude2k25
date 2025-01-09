"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Progressbar from '../components/progressbar';
import success from '../assets/Successicon.png';
import { FileUpload } from "@/components/ui/file-upload";
import { useRouter } from 'next/navigation';
import { updateEventData, registerParticipant, registerTeam, generateParticipantId } from '../../src/utils/firestoreHelpers'; // Import the required Firebase functions
import { db } from "../../src/firebase";
import { doc, getDoc } from "firebase/firestore"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { uploadImageToFirestore } from '../../src/utils/imageHelper';








const Transummery = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transactionId, setTransactionId] = useState('');
  const router = useRouter();

  const handleTransactionIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionId(event.target.value);
  };

  const handleFinish = async () => {
    // Get the session data
    const sessionData = sessionStorage.getItem('registrationData');
    const base64image = sessionStorage.getItem('base64image');
    const parsedSessionData = sessionData ? JSON.parse(sessionData) : null;
    const parsedImage = base64image ? JSON.parse(base64image) : null;
  
    if (parsedSessionData && transactionId && parsedImage) {
      try {
        // Check if the participant exists
        const participantRef = doc(
          db,
          '2025',
          parsedSessionData.college,
          'Participants',
          parsedSessionData.name
        );
  
        const participantSnapshot = await getDoc(participantRef);
  
        // If the participant exists, use their existing ID, else generate a new ID
        if (participantSnapshot.exists()) {
          parsedSessionData.id = participantSnapshot.data().id;
        } else {
          // If the participant doesn't exist, generate a new ID
          parsedSessionData.id = await generateParticipantId(parsedSessionData.college);
        }
  
        // Update the transaction ID in the session data
        parsedSessionData.tId = transactionId;
  
        // Store the eventMap in parsedSessionData
        parsedSessionData.eventMap = parsedSessionData.eventMap || {}; // Ensure eventMap exists

        // Store the transaction image in the session data
        parsedSessionData.tImg = parsedImage;

        // Update session storage with the new registration data (including updated tId)
        sessionStorage.setItem('registrationData', JSON.stringify(parsedSessionData));
    
        // Proceed with registering the participant
        await registerParticipant(parsedSessionData.college, parsedSessionData.name, parsedSessionData);
  
        // Update event data using the eventMap
        for (const [eventName, teamNames] of Object.entries(parsedSessionData.eventMap)) {
          // Cast teamNames to an array of strings
          const teams = teamNames as string[];
        
          for (const teamName of teams) {
            await updateEventData(eventName, parsedSessionData.name, {
              ...parsedSessionData,
              teamName, // Add teamName to the details for each event
            });
        
            // If the team exists, register the team
            await registerTeam(parsedSessionData.college, teamName, parsedSessionData.name);
          }
        }        
        
        alert("Registration Successful!");
        router.push('/registerd'); // Navigate to success page
      } catch (error) {
        console.error("Error during registration:", error);
        alert("There was an error during registration. Please try again.");
      }
    } else {
      alert('Transaction ID, registration data and Transaction image are required.');
    }
  };  

  //Componenet function

// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [files, setFiles] = useState<File[]>([]); // Keeping files variable for future use.
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };



  return (
    <div className="bg-[#0d0d0d] text-white font-sans mb-10">
      <Progressbar currentStep={2} totalSteps={3} />
      <div>
        <p className='text-2xl mt-12 text-center font-inter text-gray-200'>Finally, verify your payment!</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-24'>
        <Image src={success} alt="Payment Success" />
        <h1 className='text-2xl font-semibold font-inter text-white text-center mx-2 my-8'>Payment Success!</h1>
      </div>
      {/* <div
        className='flex flex-col items-center font-inter justify-center gap-4 border-2 border-dashed border-[#07B6B0] rounded-md p-4 mx-6 md:w-[70%] md:mx-auto  lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'
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

      </div> */}
      {/*This is the new upplode area and its code is in /component/ui/file-upload.tsx in root directory*/}
      <div className="dark w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black border-neutral-500 rounded-lg">
          <FileUpload onChange={handleFileUpload} />
      </div>
      {/* till here   */}

      <div className='flex flex-col items-center justify-center mt-16 pb-16 gap-4'>
        <input
          type="text"
          placeholder='TRANSACTION ID'
          className="p-2 rounded-md font-inter border-b-[5px] border-[#797a7a]  outline-none text-black w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
          value={transactionId}
          onChange={handleTransactionIdChange}
        />
        <button
          className='bg-[#07B6B0] text-white font-inter font-semibold text-xl rounded-md p-3 mt-4 w-[90%] md:w-[70%] cursor-pointer lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'
          onClick={handleFinish}
        >
          FINISH
        </button>
      </div>
    </div>
  );
};

export default Transummery;



//////