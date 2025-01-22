import { useState } from "react";
import localFont from "next/font/local";



const anton = localFont({
  src: "../fonts/Anton-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-anton",
});

const GuidelineModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Modal Trigger */}
      <button
        onClick={toggleModal}
        className="font-bold text-[#40E0D0] hover:text-[#1f6962] transition mx-4 md:mx-6 lg:mx-12 xl:mx-16 text-lg"
      >
        🚨 Attention: Click here to see the revised guidelines of some events!
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          {/* Modal Content */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-[90%] transform transition-transform duration-300 ease-in-out scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className={`text-3xl text-center font-medium text-[#40E0D0] mb-4 ${anton.className}`}>
              Updated Guidelines
            </h2>
            <p className="text-gray-600">
              Some events have updated guidelines. Please check the latest
              changes to ensure you are prepared!
            </p>
            <ul className="list-disc list-inside mt-3 text-gray-600">
              <li>Participants are requested to bring their own laptops for the Xploit event.</li>
            </ul>
            <button
              onClick={toggleModal}
              className="mt-6 w-full bg-[#40E0D0] text-white py-2 rounded-lg hover:bg-[#2ea599] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuidelineModal;
