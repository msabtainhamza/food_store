import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/fanta_can-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Can_geo_Metal_subst_0.geometry} material={materials.Metal_subst} scale={0.01} />
      <mesh geometry={nodes.Can_geo_Coke_logo_subst_0.geometry} material={materials.Coke_logo_subst} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/fanta_can-transformed.glb')
