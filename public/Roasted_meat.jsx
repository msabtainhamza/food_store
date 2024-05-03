import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/roasted_meat-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Default_OBJ} />
    </group>
  )
}

useGLTF.preload('/roasted_meat-transformed.glb')
