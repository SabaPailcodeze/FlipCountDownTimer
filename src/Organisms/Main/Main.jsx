import React from "react";
import TimerCont from "../../Molecules/TimerCont/TimerCont";
import Mountain from "../../Molecules/Mountain/Mountain";

const Main = () => {
  return (
    <div className="w-full h-screen bg-background bg">
      <div className="w-full h-full flex flex-col z-10">
        <TimerCont />
        <Mountain />
      </div>
    </div>
  );
};

export default Main;
