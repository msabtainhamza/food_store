import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/shrimp-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.model_tex_u1_v1_0.geometry} material={materials.tex_u1_v1} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/shrimp-transformed.glb')
