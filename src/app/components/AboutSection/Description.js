import React from "react";
import { motion } from "framer-motion";
// import Model from "../gltf_models/Model";
// import Burger from "../../../../public/Burger";

// const images = [
//   {
//     id: 1,
//     src: <Model Model={<Burger />} />,
//     title: "Black Coffee",
//     desc: "Black coffee is a beverage made from roasted coffee beans. The beans are ground and soaked in water, which releases their flavor, color, caffeine content, and nutrients.",
//   },
// ];

const Description = ({ activeImage, images }) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div
        key={images.id}
        className="block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
      >
        <div className="w-full">
          <div className="py-16 text-5xl font-extrabold slide-left">
            {images.title}
          </div>
          <div className="flex flex-col justify-center items-center leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
            <p className="text-1xl font-semibold tracking-widest  mt-10 slide-left">
              Step back in time and experience pure romance and the nostalgic
              country vibe at our rustic bar. Our barrels are filled with your
              granddad’s secret beer stock, while the fresh hay and the sound of
              a gramophone playing tunes transport you to a bygone era between
              vintage and information overload.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
