import React from 'react'
import Select from '../components/Select'
import weblynx from '../assets/weblynx.png'
import cine from '../assets/cine.png'
import fc24 from '../assets/fc24.png'
import quizz from '../assets/quizz.png'

let events = [
    {id: 1, title: 'Weblynx', image: weblynx},
    {id: 2, title: 'Cinephoria', image: cine},
    {id: 3, title: 'FC24', image: fc24},
    {id: 4, title: 'Quizz Buzz', image: quizz}
]

let noEvent = events.length


const Reg = () => {
  return (
    <div className='bg-black text-white font-sans'>
        <div className=''>
            <h1 className='text-[2rem] font-bold pt-7 pb-3 px-3'>SELECT YOUR EVENTS -</h1>
            <hr className='mx-3 opacity-60'/>
        </div>

        <div className='grid grid-cols-2 gap-3 mx-3 my-6 bg-black text-white'>

            <Select 
            title='Weblynx'
            image={weblynx}
            />

            <Select 
            title='Cinephoria'
            image={cine}
            />

            <Select 
            title='FC24'
            image={fc24}
            />

            <Select 
            title='Quizz Buzz'
            image={quizz}
            />

            <Select 
            title='Cinephoria'
            image={cine}
            />

            <Select 
            title='Weblynx'
            image={weblynx}
            />

            <Select 
            title='Quizz Buzz'
            image={quizz}
            />

            <Select 
            title='FC24'
            image={fc24}
            />

        </div>
        
        <div className='flex gap-2 mx-3 items-center'>
            <input type="radio" checked className='w-5 h-5 accent-[#2FFF60]' />
            <label className='text-[#2FFF60] text-xl'> {noEvent} events selected</label>
        </div>

        <div className='mx-3 mt-16 bg-black text-white'>
            <h1 className='text-[2rem] font-bold mb-16'>ENERT YOUR DETAILS</h1>

            <div className='flex flex-col gap-4 text-black'>
                <input type="text" placeholder='Full Name' className='p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none'/>
                <input type="text" placeholder='Institution' className='p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none' />
                <input type="text" placeholder='Whatsapp Number' className='p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none' />
                <input type="text" placeholder='Email ID' className='p-2 rounded-md border-b-[5px] border-opacity-50 border-black outline-none' />
            </div>
        </div>
        <hr className='mx-3 opacity-60 mt-16' />

        <div className='mx-3 mt-16 bg-black text-white'>
            <h1 className='text-[2rem] font-bold mb-16 text-center'>GROUP EVENTS</h1>

            <div className='flex flex-col gap-4 bg-black text-white'>

            </div>    
        </div>            

    </div>
  )
}
export default Reg