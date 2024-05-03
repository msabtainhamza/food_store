"use client";

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pizza-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pizza_pizza_0.geometry} material={materials.pizza} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
      <mesh geometry={nodes.Tarelka001__0.geometry} material={materials.Tarelka001__0} rotation={[-Math.PI / 2, 0, 0]} scale={0.012} />
    </group>
  )
}

useGLTF.preload('/pizza-transformed.glb')
