import React from 'react'
import Progressbar from '../components/progressbar';
import SummeryCard from '../components/summerycard';
import weblynx from '../assets/weblynx.png';
import cine from '../assets/cine.png';
import fc24 from '../assets/fc24.png';



const RegSummery = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Progressbar
        currentStep={1}
        totalSteps={3}
      />

      <div>
        <p className='text-md text-center text-gray-200'>Great choice! Confirm and proceed</p>
      </div>  
        <h1 className='text-4xl font-bold text-white text-center mx-2 my-8'>Registration summary</h1>
        <div>
            <SummeryCard
            title='Weblynx'
            image={weblynx}
            no='01'
            />
            <SummeryCard
            title='Cinephoria'
            image={cine}
            no='02'
            />
            <SummeryCard
            title='FC24'
            image={fc24}
            no='03'
            />
        </div>
        <div>
            <div className='flex justify-between items-center my-4 mx-3'>
                <h1 className='text-2xl text-white font-bold'>Total Amount</h1>
                <p className='text-2xl text-white font-bold'>Rs. 300</p>
            </div>
            <hr className='opacity-50 mx-3' />
        </div>
        <div className='flex  gap-3 mx-3 my-5 items-center'>
            <input type="checkbox" name="agree" id="" className='w-8 h-8 rounded-xl accent-[#2FFF60]'/>
            <label htmlFor="agree" className='text-white text-lg'>I will take a screenshot of the payment and upload it in the following section.</label>
        </div> 
        <div className='mx-3 flex gap-4'>
            <button className='bg-[#07B6B0] text-xl font-semibold py-3 rounded-lg w-[90%] my-4 cursor-pointer'>PAY NOW</button>
            <button className='bg-[#07B6B0] text-xl font-semibold py-3 rounded-lg w-[90%] my-4 cursor-pointer'>PROCEED</button>
        </div>
        <a href="" className='text-white text-xl font-semibold mx-3 my-4 cursor-pointer '>﹤<span className='underline underline-offset-4'>Edit Events</span></a>
    </div>
  );
};

export default RegSummery;  