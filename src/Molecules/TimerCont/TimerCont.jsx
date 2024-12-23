import React from "react";
import HeadingText from "../../Atoms/TimerContAtoms/HeadingText/HeadingText";
import Timer from "../../Atoms/TimerContAtoms/Timer/Timer";

const TimerCont = () => {
  return (
    <div className="container m-auto w-full flex flex-col items-center gap-24 max-h-[80%]">
      <HeadingText />
      <Timer />
    </div>
  );
};

export default TimerCont;
