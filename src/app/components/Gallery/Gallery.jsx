import React from "react";

import Model from "../gltf_models/Model";
import Roasted_meat from "../../../../public/Roasted_meat";
import Burger from "../../../../public/Burger";
import { useState } from "react";
// import Chicken from "../../../../public/Chicken";
// import Cake_with_cherry from '../../../../public/Cake_with_cherry';
// import Fanta_can from '../../../../public/Fanta_can';
// import Oreo_donut from '../../../../public/Oreo_donut';
// import Shrimp from '../../../../public/Shrimp';
// import Pancake from '../../../../public/Pancake';
// import Heineken_bottle from '../../../../public/Heineken_bottle';
// import Cupcake_realityscan from '../../../../public/Cupcake_realityscan';
// import Coca_cola_soda_can from '../../../../public/Coca_cola_soda_can';
// import Cake from "../../../../public/Cake";
import ItemCard from "./ItemCard";

export default function Gallery() {
  return (
    <div id="gallery" className="bg-gray-900 md:h-[100vh]">
      <h1 className="md:text-5xl text-2xl font-bold text-center pt-10 text-white">
        The Stables Gallery
      </h1>
      <p className=" md:text-lg text-sm text-center text-white">
        Find Your Favourite Food Here
      </p>
      <div className="md:flex md:flex-row  justify-around md:mt-2 md:w-[80%] md:m-auto md:p-4">
        <div className="m-2 md:m-0 md:my-0.5 md:w-[22%]">
          <ItemCard item={<Burger />} />
        </div>
        <div className="m-2 md:m-0 md:my-0.5 md:w-[22%]">
          <ItemCard item={<Roasted_meat />} />
        </div>
        <div className="m-2 md:m-0 md:my-0.5 md:w-[22%]">
          <ItemCard item={<Burger />} />
        </div>
        <div className="m-2 md:m-0 md:my-0.5 md:w-[22%]">
          <ItemCard item={<Roasted_meat />} />
        </div>
      </div>

      <div className="md:flex md:flex-row justify-around md:w-[80%] md:m-auto md:p-4">
        <div className="m-2 md:m-0 md:my-0 md:w-[22%]">
          <ItemCard item={<Roasted_meat />} />
        </div>
        <div className="m-2 md:m-0 md:my-0 md:w-[22%]">
          <ItemCard item={<Burger />} />
        </div>
        <div className="m-2 md:m-0 md:my-0 md:w-[22%]">
          <ItemCard item={<Roasted_meat />} />
        </div>
        <div className="m-2 md:m-0 md:my-0 md:w-[22%]">
          <ItemCard item={<Burger />} />
        </div>
      </div>
      <div className="md:flex md:flex-row justify-around md:w-[80%] md:m-auto md:p-4">
        <div className="m-2 md:m-0 md:my-1 md:w-[22%]">
          <ItemCard item={<Burger />} />
        </div>
        <div className="m-2 md:m-0 md:my-1 md:w-[22%]">
          <ItemCard item={<Roasted_meat />} />
        </div>
        <div className="m-2 md:m-0 md:my-1 md:w-[22%]">
          <ItemCard item={<Burger />} />
        </div>
        <div className="m-2 md:m-0 md:my-1 md:w-[22%]">
          <ItemCard item={<Roasted_meat />} />
        </div>
      </div>
    </div>
  );
}
