"use client"

import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-06T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const currentDate = new Date().getTime();
      const difference = targetDate - currentDate;

      if (difference <= 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="relative bottom-52 font-sans">
      <h1 className=" text-lg md:text-xl font-bold text-[#40E0D0] text-center">Registration Starts In</h1>
      <div className="text-white text-sm md:text-lg font-bold mt-4 text-center">
        <span className="text-[#40E0D0]">{timeLeft.days} Days : </span>{timeLeft.hours} Hours : <span className="text-[#40E0D0]">{timeLeft.minutes} Minutes : </span>{timeLeft.seconds} Seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
