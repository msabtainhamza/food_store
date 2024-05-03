import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/coca_cola_soda_can-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body_Wrap_0.geometry} material={materials.Wrap} rotation={[-Math.PI / 2, 0, 0]} scale={0.891} />
      <mesh geometry={nodes.Body_Metalic_0.geometry} material={materials.Metalic} rotation={[-Math.PI / 2, 0, 0]} scale={0.891} />
    </group>
  )
}

useGLTF.preload('/coca_cola_soda_can-transformed.glb')
