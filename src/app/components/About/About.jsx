import React from "react";
import Model from "../gltf_models/Model";
import Burger from "../../../../public/Burger";

export default function About() {
  return (
    <div className="bg-black md:h-[100vh] p-3">
      <div>
        <h2 className="text-3xl text-white uppercase text-center mt-3">
          About Us
        </h2>
      </div>
      <div className="md:w-[70%] md:flex md:h-[70vh] m-auto bg-gray-900 mt-5 border-solid border-red-600 rounded-2xl ">
        <div className="md:w-[50%] md:h-full h-[190px] slide-right-0 md:mt-24">
          <Model Model={<Burger />} />
        </div>
        <div className="md:w-[50%] rounded-full p-[13px]">
          <h3 className="text-3xl font-semibold text-red-600 md:mt-[14vh]">
            The Stables
          </h3>
          <div className="text-white">
            <p className="text-[13px] mt-[5vh] slide-right-0 align-justify">
              Step back in time and experience pure romance and the nostalgic
              country vibe at our rustic bar. Our barrels are filled with your
              granddad’s secret beer stock, while the fresh hay and the sound of
              a gramophone playing tunes transport you to a bygone era between
              vintage and information overload.
            </p>
            <p className="text-[13px] mt-[2vh] slide-right-1 align-justify">
              Step back in time and experience pure romance and the nostalgic
              country vibe at our rustic bar. Our barrels are filled with your
              granddad’s secret beer stock, while the fresh hay and the sound of
              a gramophone playing tunes transport you to a bygone era between
              vintage and information overload.
            </p>
            {/* <Model Model={<Burger />} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
