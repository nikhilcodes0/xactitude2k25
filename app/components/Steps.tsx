import React from 'react'

const Steps = () => {
  return (
    <div className='text-white font-inter flex justify-center my-5 px-4 md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto '>
        <div className='row-span-4 md:p-4 md:w-[80%] flex flex-col justify-center '>
            <div className='p-4'>
                <h1 className='md:text-4xl text-lg text-black text-stroke'>Connect & Compete</h1>
                <hr className='mt-4 opacity-60 w-[80%] md:w-full'/>
            </div>
            <p className='px-4 text-sm md:text-xl w-[80%] md:w-full'>Dive into exciting challenges, solve problems.</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-[1rem]'>
            <div className='border-2 rounded-full w-[50px] h-[50px] mx-0 md:text-xl text-center flex items-center justify-center'>1</div>
            <div className='bg-white w-[2px] h-[10rem] mx-0'></div>
            <div className='border-2 rounded-full w-[50px] h-[50px] mx-0 md:text-xl text-center flex items-center justify-center'>2</div>
            <div className='bg-white w-[2px] h-[10rem] mx-0'></div>
            <div className='border-2 rounded-full w-[50px] h-[50px] mx-0 md:text-xl text-center flex items-center justify-center'>3</div>
        </div>
        <div className='flex flex-col justify-between w-[80%] gap-[15rem] md:gap-[20rem] '>
            <div className=' md:p-4 md:w-[80%] flex flex-col'>
                <div className=' p-4'>
                    <h1 className='md:text-4xl text-lg text-black text-stroke'>Register & 
                    Gear Up</h1>
                    <hr className='mt-4 opacity-60 w-[80%] md:w-full'/>
                </div>
                <p className='px-4 text-sm w-[80%] md:text-xl md:w-full'>Sign up for the fest and select your favorite evnets.</p>
            </div>
            <div className=' md:p-4 md:w-[80%] flex flex-col '>
                <div className=' p-4'>
                    <h1 className='md:text-4xl text-lg text-black text-stroke'>Win & Celebrate</h1>
                    <hr className='mt-4 opacity-60 w-[80%] md:w-full'/>
                </div>
                <p className='px-4 text-sm w-[80%] md:text-xl md:w-full'>Claim your prizes, earn recognition, and celebrate your achievements.</p>
            </div>
        </div>
    </div>
  )
}

export default Steps