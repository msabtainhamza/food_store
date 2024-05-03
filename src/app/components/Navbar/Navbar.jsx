import React from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-7">
      <div className="flex justify-center sm:justify-start w-full sm:w-auto">
        <Image
          src={logo}
          alt="Logo"
          height={100}
          width={100}
          priority // This helps in loading the logo faster
        />
      </div>
      <div className="mt-5 sm:mt-0 w-full sm:w-auto">
        <ul className="flex sm:flex-row justify-between sm:justify-between gap-4 sm:gap-16 text-[10px] sm:text-xl font-semibold bg-clip-text text-red-500">
          <li>
            <Link href="/3d-website">3D Website</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
