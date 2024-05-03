

import React from 'react';
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/earth.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.sphere_gltf.geometry} material={materials.yellow_plaster} />
    </group>
  )
}

useGLTF.preload('/earth.gltf')
