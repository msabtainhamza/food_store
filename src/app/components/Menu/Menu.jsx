import React from "react";
import Image from "next/image";
import menumain from "../../../../public/menumain.jpg";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="relative bg-gray-900">
      <Link href="#">
        <div className="w-full relative">
          <Image
            src={menumain}
            className="opacity-40 object-cover md:h-[490px] h-[500px]"
          />
          <div className="absolute top-[-20px] left-0 w-full h-full flex flex-col justify-center items-center">
            <div>
              <h1 className="text-white md:text-5xl text-3xl font-bold text-center ">
                The Stables Menu
              </h1>
              <p className="text-white md:text-lg text-sm text-center">
                Find Your Favourite Food Here
              </p>
            </div>
            <div className="flex md:flex-row flex-col md:text-[30px] text-[15px] md:space-x-10 md:mt-8 mt-3 ">
              <div className="mt-3">
                <h2 className="text-white   border-2 text-center border-black md:p-20 p-[35px] rounded-2xl bg-red-900">
                  Food
                </h2>
              </div>
              <div className="mt-3">
                <h2 className="text-white  border-2 text-center border-black md:px-12 md:py-20 p-[35px] rounded-2xl bg-red-900">
                  Beverages
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
