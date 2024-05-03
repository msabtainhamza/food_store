import React, { useState } from "react";
import Model from "../gltf_models/Model";

export default function ItemCard({ item }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div
      className=" relative border-2 border-green-200 rounded-xl border-opacity-0.1 bg-blue-200 "
      onMouseOver={() => setOverlay(true)}
      onMouseOut={() => setOverlay(false)}
    >
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="absolute top-0 right-0 bg-gray-900 p-6 rounded-lg w-[30%] h-[100%]">
            <button
              className="absolute top-0 right-0 m-3 text-white hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div>
              <h2 className="text-white text-2xl font-semibold text-center mt-4">
                Order Details
              </h2>
              <div className="w-full h-[300px]">
                <Model Model={item} />
              </div>
              <div className="flex justify-between w-[70%] m-auto text-2xl text-white">
                <div>
                  <h2>Product Name : </h2>
                  <h2>Price : </h2>
                  <h2>Quantity : </h2>
                  <h2>Total : </h2>
                </div>
                <div>
                  <h2>Burger</h2>
                  <h2>30 $</h2>
                  <h2>1</h2>
                  <h2>30$</h2>
                </div>
              </div>
              <div className="m-14">
                <button
                  type="submit"
                  onClick={closeModal}
                  className="bg-gradient-to-r from-fuchsia-500 to-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-2xl"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Model Model={item} />
      {overlay && (
        <div className="absolute top-0 right-0 w-[20%] h-[20%] rounded-xl ">
          <button
            className="absolute top-0 right-0 p-1 bg-blue-500 text-white font-semibold focus:outline-none text-[8px] hover:cursor-pointer rounded-2xl"
            onClick={() => setModalVisible(true)}
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}
