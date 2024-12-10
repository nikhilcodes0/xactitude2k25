import React from 'react'


const Card = () => {
  return (
    <div className="relative z-10 w-96 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        <div className="relative z-10 p-6">
            <h3 className="text-2xl font-bold mb-2">Event Title</h3>
            <p className="text-gray-600 mb-4">Event Description</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Learn More</button>
        </div>
    </div>
  )
}

export default Card