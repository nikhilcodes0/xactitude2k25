// import localFont from "next/font/local";
import arrow from "../assets/arrow.svg";
import Image from "next/image";
import { Inter } from "next/font/google";
import EventsGroup from "../components/EventsGroup";
import weblynx from "../assets/weblynx.png";
import cine from "../assets/cine.png";
import fifa from "../assets/fifa.png";
import quizz from "../assets/quizz.png";
// const jersey = localFont({
//     src: "../fonts/Jersey10-Regular.ttf",
//     weight: "400",
//     style: "normal",
//     variable: "--font-jersey",
//   });

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const events = [
  {no: "01" ,title: "Weblynx", image: weblynx, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", chip1: "UI/UX", chip2: "Development", chip3: "Design"},
  {no: "02" ,title: "Cinephoria", image: cine, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", chip1: "UI/UX", chip2: "Development", chip3: "Design"},
  {no: "03" ,title: "Fifa", image: fifa, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", chip1: "UI/UX", chip2: "Development", chip3: "Design"},
  {no: "04" ,title: "Quiz Buzz", image: quizz, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", chip1: "UI/UX", chip2: "Development", chip3: "Design"},
]

const Events = () => {
  return (
    <div className="text-white">
      <div className="bg-white w-full h-80 rounded-b-2xl pl-5 z-10 flex flex-col justify-around overflow-hidden pt-10">
        <div className="flex gap-3 items-center">
          <h1 className="text-black text-8xl font-antonio tracking-[-0.03em] font-black ">
            Events
          </h1>
          <Image src={arrow} alt="arrow" className="w-14 h-14 pt-4" />
        </div>
        <div className="flex gap-10 items-center justify-around">
          <div className="flex gap-3 items-center">
            <p className={`text-7xl text-[#07B6B0]  ${inter.className}`}>*</p>
            <p className="text-black font-sans text-lg leading-tight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <p className={`text-neutral-400 text-9xl ${inter.className} font-black tracking-[-0.03em] relative top-12 right-2`}>
              12
            </p>
          </div>
        </div>
      </div>
      <div>
        {events.map((event) => (
          <EventsGroup key={event.no} {...event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
