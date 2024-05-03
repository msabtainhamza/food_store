"use client";

import React from "react";
import Navbar from "./Navbar/Navbar";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import Model from "../components/gltf_models/Model";
import Burger from "../../../public/Burger";
import Roasted_meat from "../../../public/Roasted_meat";
// import burgerimg from "../../../public/burgerimg.avif";
import burgervec from "../../../public/burgervec.png";
import Pizza from "../../../public/Pizza.png";
import Image from "next/image";

export default function Head() {
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(false);
      requestAnimationFrame(() => {
        setTrigger(true);
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative  md:h-[100vh] p-2 bg-gray-900">
      {/* Image container */}
      {/* <div className="">
        <Link href="#">
          <Image
            src={headerimg} // Path to your image inside the public folder
            className="w-full h-[700px]"
          />
        </Link>
      </div> */}
      {/* Navbar */}
      <div className="w-[95%] m-auto">
        <Navbar />
      </div>
      <div className="md:flex  justify-between w-70% m-auto md:mt-10 text-white">
        <div className="md:w-[50%] p-6 md:mt-10 slide-right-0">
          <div className="flex flex-col justify-between md:h-[300px] w-[100%]">
            <h1 className="text-2xl md:text-3xl text-red-500 font-bold">
              The Stables
            </h1>
            <p className=" text-[12px] md:text-[14px] font-semibold text-justify ">
              Step back in time and experience pure romance and the nostalgic
              country vibe at our rustic bar. Our barrels are filled with your
              granddad’s secret beer stock, while the fresh hay and the sound of
              a gramophone playing tunes transport you to a bygone era between
              vintage and information overload.
            </p>
            <p className="text-[14px] font-semibold text-justify hidden md:block">
              At The Stables, magic flows in many forms, from our food and
              cocktails to music, art, literature, and cultural collaborations.
              Come and discover an enchanting world where time stands still, and
              every moment is infused with wonder and delight.
            </p>
            <h2 className="md:text-2xl text-xl font-bold">299.00 $</h2>
          </div>
          <div className="flex justify-between md:w-[17%] w-[50%] mt-2">
            <Link href="#" className="border-2 rounded-full border-white">
              <FaFacebookF className="text-[30px] p-1" />
            </Link>
            <Link href="#" className="border-2 rounded-full border-white">
              <FaInstagram className="text-[30px] p-1" />
            </Link>
            <Link href="#" className="border-2 rounded-full border-white">
              <CiYoutube className="text-[30px] p-1" />
            </Link>
          </div>
        </div>
        <div className="md:w-[50%] h-[550px]">
          <div className="w-[100%] h-[100%]">
            <div className="w-[100%] h-[100%]">
              <Model
                Model={<Burger />}
                // className="transition-transform duration-300 hover:scale-110"
              />

              {/* <Image
              src={burgervec}
              alt="burger"
              className="w-[570px] h-[500px] transition-transform duration-300 hover:scale-110"
            /> */}
            </div>
            {/* <div
              className={`w-[100%] h-[100%] ${
                !show ? "block" : "hidden"
              } slide-left`}
            >
              <Model Model={<Roasted_meat />} />
              <Image
                src={Pizza}
                alt="burger"
                className="w-[570px] h-[500px] hover:w-[670] hover:h-[600]"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
