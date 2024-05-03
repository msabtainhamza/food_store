import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/ghana_organics_can_drink-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Material_0.geometry} material={materials.Material_0} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
      <mesh geometry={nodes.Material_1.geometry} material={materials.Material_1} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
      <mesh geometry={nodes.Material_2.geometry} material={materials.Material_2} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
      <mesh geometry={nodes.Material_3.geometry} material={materials.Material_3} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
      <mesh geometry={nodes.Material_4.geometry} material={materials.Material_4} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
      <mesh geometry={nodes.Material_5.geometry} material={materials.Material_5} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
      <mesh geometry={nodes.print_area1_6.geometry} material={materials.print_area1_6} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
      <mesh geometry={nodes.Material_7.geometry} material={materials.Material_7} position={[0, -0.001, -0.002]} rotation={[-0.003, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/ghana_organics_can_drink-transformed.glb')
