"use client";

import { useState } from "react";

// import { images } from "./constants";
import Description from "./Description";
import Burger from "../../../../public/Burger";
import Model from "../gltf_models/Model";

const images = {
  id: 1,
  src: <Model Model={<Burger />} />,
  title: "Black Coffee",
  desc: "Black coffee is a beverage made from roasted coffee beans. The beans are ground and soaked in water, which releases their flavor, color, caffeine content, and nutrients. ",
};

const AboutSlider = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-700 to-gray-400">
      <h1 className="text-4xl font-bold text-center mb-5 uppercase">
        About US
      </h1>
      <div className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl border-2 border-black border-opacity-10">
        <div
          key={images.id}
          className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
        >
          <div className="block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out">
            <div className="flex justify-center items-center h-screen">
              {images.src}
            </div>
          </div>
        </div>
        <Description activeImage={activeImage} images={images} />
      </div>
    </main>
  );
};

export default AboutSlider;
