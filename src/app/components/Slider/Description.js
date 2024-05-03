import React from "react";
import { images } from "./constants";
import left from "../../../../public/left.svg";
import right from "../../../../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const Description = ({ activeImage, clickNext, clickPrev }) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      {/* <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        Coffee Cafe
      </div> */}
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] md:py-20 py-5 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="md:py-16 py-0 md:text-5xl text-xl font-extrabold">
              {elem.title}
            </div>
            <div className="leading-relaxed font-medium md:text-base text-[14px] tracking-wide h-60 md:h-40 italic text-gray-600">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <button className="bg-[#ecae7e] text-white uppercase md:px-4 md:py-2 p-[7px] md:text-xl text-[14px] rounded-md my-10">
            book now
          </button>
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
