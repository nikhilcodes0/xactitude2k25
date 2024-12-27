import Ripple from "@/components/ui/ripple";
import React from "react";
import { Inter } from "next/font/google";
import HyperText from "@/components/ui/hyper-text";
import BoxReveal from "@/components/ui/box-reveal";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Link from "next/link";
import CountdownTimer from "@/app/components/CountdownTimer";
const inter = Inter({ subsets: ["latin"] });

const Soon = () => {
  return (
    <div className="dark relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      
      <CountdownTimer />
      <div className="relative bottom-32">
        <BoxReveal boxColor="#40E0D0">
          <p
            className={`z-10 flex gap-2 items-center whitespace-pre-wrap text-center text-lg font-medium tracking-tighter text-white relative ${inter.className}`}
          >
            <HyperText className="text-5xl" duration={1000}>
              
              Coming Soon 
            </HyperText>
            <span className="text-[#40E0D0] font-bold text-6xl">!</span>
          </p>
        </BoxReveal>
      </div>
      <div className="relative top-36 ">
        <BoxReveal boxColor="#40E0D0">
          <p
            className={`z-10 whitespace-pre-wrap text-center text-lg font-medium tracking-tighter text-white ${inter.className}`}
        >
          Get ready to experience a <span className="text-[#40E0D0] font-bold">fest</span> like no other with fun, friends, and
          festivity!
        </p>
        </BoxReveal>
      </div>
      <div className="relative bottom-24 ">
        <BoxReveal boxColor="#40E0D0">
            <p className={`text-center text-xl font-medium tracking-tighter text-white ${inter.className}`}>
            Mark your calendars on <span className="text-[#40E0D0] font-bold">30th and 31st</span> of January. </p>
            <p className={`text-center text-xl font-medium tracking-tighter text-white ${inter.className}`}>It&apos;s gonna be  <span className="text-[#40E0D0] font-bold">lit !</span>
            </p>
        </BoxReveal>
      </div>
      <div className="relative top-28">
        <BoxReveal boxColor="#40E0D0">
            <Link href="/"> 
          <InteractiveHoverButton className={`text-sm text-white ${inter.className} w-[15rem]`} text="Go back to homepage" />
            </Link>
        </BoxReveal>
      </div>
      
      <Ripple />
    </div>
  );
};

export default Soon;
