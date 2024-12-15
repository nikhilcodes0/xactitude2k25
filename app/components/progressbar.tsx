import React from 'react';  // Import React to use JSX and React functionality

// Define the progressbar functional component, expecting 'currentStep' and 'totalSteps' as props.
const progressbar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
  
  // Adjust the 'currentStep' to be 0-indexed (as it’s usually 1-indexed when passed).
  currentStep = currentStep - 1;

  return (
    // This is the main wrapper for the progress bar. It has flexbox styling to layout the elements.
    <div className="flex items-center justify-between px-3 pt-8 pb-4">
      
      {/* Map through an array of length 'totalSteps' to generate the steps */}
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex justify-center items-center gap-1">
        
          {/* Step Circle: Each step is represented by a circle */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full text-black text-2xl font-sans  ${
              currentStep >= index ? 'bg-[#07B6B0] text-white' : 'bg-gray-300'
            }`}
          >
            {/* Display the step number (index + 1 because array is 0-indexed) */}
            {index + 1}
          </div>

          {/* Connecting Line: Draw a line between the circles (except after the last circle) */}
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

// Export the component so it can be used elsewhere in the application
export default progressbar;
