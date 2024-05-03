import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pancake-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} position={[1.02, 7.462, 2.808]} rotation={[2.361, 0, Math.PI]} scale={0.381} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.material_1} position={[1.02, 7.462, 2.808]} rotation={[2.361, 0, Math.PI]} scale={0.381} />
    </group>
  )
}

useGLTF.preload('/pancake-transformed.glb')
