"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/burger-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.bun_bun001_0.geometry}
        material={materials["bun.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.vegeis_vegies001_0.geometry}
        material={materials["vegies.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.pPlane14_lettuce001_0.geometry}
        material={materials["lettuce.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/burger-transformed.glb");
