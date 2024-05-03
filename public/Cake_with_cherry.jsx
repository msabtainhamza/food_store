import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cake_with_cherry-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Wood} rotation={[-Math.PI / 2, 0, 0]} scale={0.002} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Cake} rotation={[-Math.PI / 2, 0, 0]} scale={0.002} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Krame} rotation={[-Math.PI / 2, 0, 0]} scale={0.002} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.Sherry} rotation={[-Math.PI / 2, 0, 0]} scale={0.002} />
    </group>
  )
}

useGLTF.preload('/cake_with_cherry-transformed.glb')
