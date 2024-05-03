"use client";

import React, { useEffect, useState, useRef } from "react";
import "../../App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Html,
  // PerspectiveCamera,
} from "@react-three/drei";

export default function Model({ Model }) {
  const [counter, setCounter] = useState(0);
  const canvasRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1); // Update the counter
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const canvasElement = canvasRef.current?.querySelector("canvas");
    if (!canvasElement) return;

    const handleContextLost = (event) => {
      event.preventDefault();
      console.log("WebGL context was lost.");
      // Add any additional handling here
    };

    const handleContextRestored = () => {
      console.log("WebGL context was restored.");
      // Re-initialize or reload WebGL-dependent resources if necessary
    };

    canvasElement.addEventListener("webglcontextlost", handleContextLost);
    canvasElement.addEventListener(
      "webglcontextrestored",
      handleContextRestored
    );

    return () => {
      canvasElement.removeEventListener("webglcontextlost", handleContextLost);
      canvasElement.removeEventListener(
        "webglcontextrestored",
        handleContextRestored
      );
    };
  }, []);

  return (
    <>
      <Canvas ref={canvasRef}>
        {/* <PerspectiveCamera makeDefault position={[5, 1, 1]} /> */}
        <ambientLight />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minDistance={1}
          maxDistance={6}
          autoRotate
        />
        <Suspense
          fallback={
            <Html>
              <div>Loading Model...</div>
            </Html>
          }
        >
          {Model}
        </Suspense>
        <Environment preset="forest" />
        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.8}
          scale={100}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Canvas>
    </>
  );
}
