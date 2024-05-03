import Head from "./Head";
import Menu from "./Menu/Menu";
import Fotter from "./Fotter/Fotter";
import Gallery from "./Gallery/Gallery";
import Slider from "./Slider/Slider";
import Contact from "./Contact/Contact";
import About from "./About/About";
import React, { useEffect } from "react";
import ErrorBoundary from "./gltf_models/ErrorBoundary";

export default function Main() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.reload();
  //   }, 20000); // Set the time for reload (5000 milliseconds = 5 seconds)

  //   return () => clearTimeout(timer); // Clear timeout if the component unmounts
  // }, []);
  return (
    <ErrorBoundary>
      <Head />
      <About />
      <Menu />
      <Slider />
      <Gallery />
      <Contact />
      <Fotter />
    </ErrorBoundary>
  );
}
