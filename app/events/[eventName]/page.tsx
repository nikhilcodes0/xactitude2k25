import React from "react";
import eventsData from "../eventsData";
import Image from "next/image";
import localFont from "next/font/local";

const anton = localFont({
  src: "../../fonts/Anton-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-anton",
});









const eventsPage = ({ params }: { params: { eventName: string } }) => {
  const eventName = params.eventName;
  const event = eventsData.find((event) => event.name === eventName);
  return (
    <div className="bg-white font-sans p-4">
      <h1 className={`text-8xl font-black capitalize ${anton.className}`}>{event?.name}</h1>
      <div className="flex mt-8 gap-7 items-center">
        {event?.image && <Image src={event.image} alt={event?.name ?? ''} />}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default eventsPage;
