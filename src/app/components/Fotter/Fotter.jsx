import React from "react";
import Link from "next/link";
import Image from "next/image";
import menumain from "../../../../public/menumain.jpg";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-[100px] w-full relative bg-gray-500">
      <Link href="">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={menumain}
            alt="Menu"
            className="opacity-50 object-cover layout-fill h-[100px]"
          />
        </div>
      </Link>
      <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white text-center">
        <div className="flex justify-center items-center space-x-4 md:mt-2 mt-2 text-3xl">
          <div className="border-2 border-black rounded-full  p-[3px] bg-white text-black">
            <FaFacebook />
          </div>
          <div className="border-2 border-black rounded-full  p-[3px] bg-white text-black">
            <FaTwitter />
          </div>
          <div className="border-2 border-black rounded-full  p-[3px] bg-white text-black">
            <FaYoutube />
          </div>
        </div>
        <h2 className="mt-1 text-[10px]">
          THE STABLES @ 2023 | MANAGED BY PENINSULA HOSPITALITY GROUP
        </h2>
      </div>
    </div>
  );
}
