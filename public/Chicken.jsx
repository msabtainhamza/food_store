import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chicken-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0, -0.525, 0.533]} rotation={[0, 1.33, 0]} scale={0.275} />
    </group>
  )
}

useGLTF.preload('/chicken-transformed.glb')
