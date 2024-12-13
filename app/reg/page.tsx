import React from 'react'
import Select from '../components/Select'
import weblynx from '../assets/weblynx.png'
import cine from '../assets/cine.png'
import fc24 from '../assets/fc24.png'
import quizz from '../assets/quizz.png'



const Reg = () => {
  return (
    <div className='bg-black text-white font-sans'>
        <div >
            <h1 className='text-[2.2rem] font-bold'>SELECT YOUR EVENTS -</h1>
            <hr className=''/>
        </div>

        <div className='grid grid-cols-2 gap-x-16 gap-y-3 bg-black text-white'>

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

        <div>
            <h1>ENERT YOUR DETAILS</h1>

            <div className='flex flex-col gap-4 bg-black text-white'>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </div>
        </div>

    </div>
  )
}
export default Reg