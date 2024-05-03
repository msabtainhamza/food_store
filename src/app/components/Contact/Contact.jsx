"use client";

import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import React, { useState } from "react";
import { sendContactForm } from "../../lib/api";

import { useToast } from "@chakra-ui/react";

const initValues = {
  fname: "",
  lname: "",
  email: "",
  subject: "",
  message: "",
};

const initState = { isLoading: false, errorMessage: "", values: initValues };

export default function Contact() {
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

  const toast = useToast();
  const [state, setState] = useState(initState);
  const { values, isLoading, errorMessage } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        errorMessage: error.message,
      }));
    }
  };

  return (
    <div className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 pt-10 pb-8">
      <h1
        className="text-4xl font-bold text-center"
        onClick={() => setModalVisible(true)}
      >
        Contact Us
      </h1>
      <h2 className="text-xl font-bold text-center mt-6">Get Started Your</h2>
      <h2 className="text-xl font-bold text-center">Project with us</h2>
      {modalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-black p-6 rounded-lg w-[40%] h-[80%]">
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
            <p>This is a pop-up modal</p>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row mt-8">
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-purple-900 px-6 py-8 rounded-xl mb-4 sm:mb-0 sm:mr-2">
          <div className="flex items-center mb-4">
            <CiPhone />
            <h3 className="ml-2">Phone</h3>
          </div>
          <div>
            <h3>+9203037489340</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-purple-900 px-6 py-8 rounded-xl mb-4 sm:mb-0 sm:mr-2">
          <div className="flex items-center mb-4">
            <CiLocationOn />
            <h3 className="ml-2">Location</h3>
          </div>
          <div>
            <h3>+Sindh, Pakistan</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-purple-900 px-6 py-8 rounded-xl mb-4 sm:mb-0 sm:mr-2">
          <div className="flex items-center mb-4">
            <MdEmail />
            <h3 className="ml-2">Email</h3>
          </div>
          <div>
            <h3>+chabdulbasit1029@gmail.com</h3>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-purple-900 px-6 py-8 rounded-xl mb-4 sm:mb-0">
          <div className="flex items-center mb-4">
            <CiPhone />
            <h3 className="ml-2">Facebook</h3>
          </div>
          <div>
            <h3>Akraisape</h3>
          </div>
        </div>
      </div>
      <div>
        <form className="mt-10">
          <div className=" m-auto mb-4 ">
            <div>
              {errorMessage && <p className="font-xl text-red-500">{error}</p>}
              <input
                className="outline-none font-[10px] bg-slate-900 border-none w-[100%]  p-3 text-white rounded-2xl"
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="outline-none font-[10px] bg-slate-900 border-none w-[100%]  mt-3 p-3 text-white rounded-2xl"
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div className="mb-4">
        <input
            className="w-full p-2 border border-black  text-white  rounded-md"
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
        />
    </div> */}
          <div className="mb-4 m-auto">
            <div>
              <input
                className="outline-none font-[10px] bg-slate-900 border-none w-[100%] p-3 text-white rounded-2xl"
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="outline-none font-[10px] bg-slate-900 border-none w-[100%] mt-3 p-3 text-white rounded-2xl"
                type="tel"
                placeholder="Subject"
                name="subject"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <div className="mb-4">
        <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="tel"
            placeholder="Phone"
            name="phone"
            required
        />
    </div> */}
          <div className="mb-4">
            <textarea
              className="w-full p-3 bg-slate-900 font-[10px] outline-none border-none rounded-2xl"
              rows="4"
              placeholder="Message"
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              // disabled={isLoading ? "not-allowed" : "pointer"}
              onClick={onSubmit}
              className="bg-gradient-to-r from-fuchsia-500 to-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-2xl"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
