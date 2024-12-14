import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Progressbar from '../components/progressbar';
import success from '../assets/Successicon.png';
import upload from '../assets/uploadicon.png';



const transummery = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Progressbar
        currentStep={2}
        totalSteps={3}
      />
      <div>
        <p className='text-md text-center text-gray-200'>Finally, verify your payment !</p>
      </div> 
      <div className='flex flex-col items-center justify-center mt-24'>
        <Image src={success} alt="" />
        <h1 className='text-2xl font-semibold text-white text-center mx-2 my-8'>Payment Success!</h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 border-2 border-dashed border-[#07B6B0] rounded-md p-4 mx-6'>
        <Image src={upload} alt="" />
        <p className='text-md font-semibold'>Drag & drop files or <span className='text-[#07B6B0] cursor-pointer underline underline-offset-2 '>Browse</span></p>
        <p className='text-sm opacity-70'>Supported formates: JPEG, PNG, PDF, PSD, PPT</p>
      </div> 
      <div className='flex flex-col items-center justify-center mt-16 pb-16 gap-4'>
        <input type="text" placeholder='TRANSACTION ID' className="p-2 rounded-md border-b-[5px] outline-none text-black w-[90%]" />
        <button className='bg-[#07B6B0] text-white text-xl font-semibold rounded-md p-3 mt-4 w-[90%]'>FINISH</button>
      </div>
    </div>  
  );
};

export default transummery;  