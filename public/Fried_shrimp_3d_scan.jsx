import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/fried_shrimp_3d_scan-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} position={[0.199, -0.21, 1.75]} rotation={[-1.335, 0.027, -2.646]} scale={0.252} />
    </group>
  )
}

useGLTF.preload('/fried_shrimp_3d_scan-transformed.glb')
