import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Select from './Select'

interface Props {
    no : string;
    title: string;
    team: boolean;
    image: string | StaticImageData;
}

const Group = ({no, title, image, team }: Props) => {
  return (
    <div className='bg-black'>
        <div className='my-6'>
            <hr className='opacity-50 py-4' />
            <div className='flex  gap-3'>
                <h1 className='text-4xl text-white font-bold opacity-60'>{no}</h1>
                <div>
                    <Select 
                        title={title}
                        image={image}
                        selected={false}
                        onClick={() => {}}
                    />
                    <div className='flex gap-3 text-xl my-8'>
                        <div className='flex items-center'>
                            <input type="radio" name="weblynx" id="create" className=' w-5 h-5 accent-[#2FFF60]' />
                            <label htmlFor="create" className='text-white mx-2'>Create Team</label>
                        </div>
                        <div className='flex items-center'>
                            <input type="radio" name="weblynx" id="join" className='w-5 h-5 accent-[#2FFF60]'/>
                            <label htmlFor="join" className='text-white mx-2'>Join Team</label>
                        </div>
                    </div>
                    <div className='flex gap-3 flex-col my-4'>
                        <input type="text" placeholder='Team Name' className={`p-2 rounded-md border-b-[5px] outline-none text-black ${team ? 'border-[#2FFF60]' : 'border-[#ff5050]'}`}/>
                        <p className={`${team ? 'text-[#2FFF60]' : 'text-[#ff5050]'} text-xl`}>Team Name Available</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Group