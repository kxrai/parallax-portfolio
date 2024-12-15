import React from "react";
import Plx from "react-plx";

export default function Home() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 500,
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale",
              },
            ],
          },
        ]}
      >
        <img src="bg.png" alt="background" className="w-full" />
      </Plx>
      <h1 className="text-white text-4xl md:text-6xl font-bold absolute">
        Welcome to My Portfolio
      </h1>
    </div>
  );
}
