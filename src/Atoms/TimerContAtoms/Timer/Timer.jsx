import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeleft, setTimeleft] = useState({});

  const [finaldate, setFinalDate] = useState(new Date());

  useEffect(() => {
    let today = new Date();
    today.setDate(today.getDate() + 14);
    setFinalDate(today);
  }, []);

  function getTimeLeft() {
    const difference = +finaldate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    setTimeleft(timeLeft);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getTimeLeft();
    }, 100);
  });

  return (
    <div className="flex gap-4 md:gap-8 font-red-hat px-4">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] text-center bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden flex items-start">
            {timeleft.days}
          </div>
          <div className="h-[1px] bg-black flex justify-center opacity-[0.25] px-8"></div>
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden absolute flex items-end bg-shadow bg-cover shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            {timeleft.days}
          </div>
        </div>
        <p className="text-center text-[#8385A9] text-[11px] sm:text-[14px] font-bold leading-normal tracking-[5.9px]">
          DAYS
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] text-center bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden flex items-start">
            {timeleft.hours}
          </div>
          <div className="h-[1px] bg-black flex justify-center opacity-[0.25] px-8"></div>
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden absolute flex items-end bg-shadow bg-cover shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            {timeleft.hours}
          </div>
        </div>
        <p className="text-center text-[#8385A9] text-[11px] sm:text-[14px] font-bold leading-normal tracking-[5.9px]">
          HOURS
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] text-center bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden flex items-start">
            {timeleft.minutes}
          </div>
          <div className="h-[1px] bg-black flex justify-center opacity-[0.25] px-8"></div>
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden absolute flex items-end bg-shadow bg-cover shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            {timeleft.minutes}
          </div>
        </div>
        <p className="text-center text-[#8385A9] text-[11px] sm:text-[14px] font-bold leading-normal tracking-[5.9px]">
          MINUTES
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] text-center bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden flex items-start">
            {timeleft.seconds}
          </div>
          <div className="h-[1px] bg-black flex justify-center opacity-[0.25] px-8"></div>
          <div className="text-[#FB5E84] text-[40px] sm:text-[80px] font-bold leading-[71px] bg-[#343650] py-9 px-6 rounded-lg h-[25%] overflow-hidden absolute flex items-end bg-shadow bg-cover shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            {timeleft.seconds}
          </div>
        </div>
        <p className="text-center text-[#8385A9] text-[11px] sm:text-[14px] font-bold leading-normal tracking-[5.9px]">
          SECONDS
        </p>
      </div>
    </div>
  );
};

export default Timer;
