import React from 'react'
import Progressbar from '../components/progressbar';
import success from '../assets/Successicon.png';
import Image from 'next/image';


const registerd = () => {
  return (
    <div className=" text-white font-sans">
      <Progressbar
        currentStep={3}
        totalSteps={3}
      />
      <div className='flex flex-col items-center justify-center mt-16'>
        <Image src={success} alt="" />
        <h1 className='text-4xl font-bold text-[#07B6B0] text-center mx-2 my-8'>Registered</h1>
        <p className='text-xl text-center opacity-70 mx-10'>You&apos;re all set! Get ready to shine at your events. See you there!</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-6 rounded-3xl py-7 my-6 mx-5 shadow-[1px_1px_15px_rgb(0,0,0,0.2)] shadow-slate-700'>
        <p className='text-lg font-semibold rounded-xl text-center p-2 bg-slate-50 text-black mx-7 w-[90%]'>Participant ID</p>
        <p className='text-lg font-semibold  mx-7'>KJC8346XXX29</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-6 rounded-3xl py-7 my-6'>
        <button className='border-2 border-[#07B6B0] text-xl font-semibold rounded-3xl p-3 w-[90%] mx-6'>Whatsapp Link</button>
        <button className='border-2 border-white   text-xl font-semibold rounded-3xl p-3 w-[90%] mx-6'>Copy to Clipboard</button>
      </div>
      <a href="" className='text-white text-xl font-semibold mx-3 my-4 cursor-pointer opacity-70 '>﹤<span className='underline underline-offset-4'>Home Page</span></a>
    </div>    
  );
};

export default registerd;  