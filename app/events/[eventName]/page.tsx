import React from "react";
import eventsData from "../eventsData";
import Image from "next/image";
import localFont from "next/font/local";

// Import custom font
const anton = localFont({
  src: "../../fonts/Anton-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-anton",
});

// Define the PageProps interface
interface PageProps {
  params: Promise<{ eventName: string }>;
}

// Dynamic route handler
const EventPage = async ({ params }: PageProps) => {
  // Destructure the eventName from params
  const { eventName } = await params;

  // Find the event data
  const event = eventsData.find((event) => event.name === eventName);

  // Handle case where the event is not found
  if (!event) {
    return (
      <div className="bg-white font-sans p-4">
        <h1 className="text-red-500">Event not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans p-4">
      <h1 className={`text-8xl font-black capitalize ${anton.className}`}>
        {event.name}
      </h1>
      <div className="flex mt-8 gap-7 items-center">
        {event?.image && <Image src={event.image} alt={event?.name ?? ''} />}
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default EventPage;
