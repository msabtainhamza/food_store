"use client";

import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 11000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="md:text-4xl text-2xl font-bold text-center mb-5 uppercase text-white">
        Upcoming Events
      </h1>
      <div className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl border-2 bg-gray-900 border-black border-opacity-10">
        <div
          className={`hidden w-full md:flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
        >
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                  : "hidden"
              }`}
            >
              <div className="flex justify-center items-center h-screen">
                {elem.src}
              </div>
            </div>
          ))}
        </div>
        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </main>
  );
};

export default Slider;
