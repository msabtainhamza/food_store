import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/oreo_donut-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.004']} position={[-0.21, 0.378, 0.13]} rotation={[0.01, 0, -0.028]} />
    </group>
  )
}

useGLTF.preload('/oreo_donut-transformed.glb')
