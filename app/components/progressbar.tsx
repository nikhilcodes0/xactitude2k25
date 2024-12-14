import React from 'react';

const progressbar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
    
  currentStep = currentStep -1
  return (
    <div className="flex items-center justify-between px-3 pt-8 pb-4">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex justify-center items-center gap-1">
          {/* Step Circle */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full text-black text-2xl font-sans  ${
              currentStep >= index ? 'bg-[#07B6B0] text-white' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </div>

          {/* Connecting Line */}
          
          {index < totalSteps - 1 && (
            <div
              className={`mx-2 h-[3px] w-[7rem] ${
                currentStep > index ? 'bg-[#07B6B0]' : 'bg-gray-300'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default progressbar;
