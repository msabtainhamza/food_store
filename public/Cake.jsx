"use client";
import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/cake-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane002_Material010_0.geometry} material={materials.PaletteMaterial001} position={[10.866, 42.645, -12.959]} rotation={[-1.364, 0.04, 1.931]} scale={[2.405, 2.398, 2.404]} />
      <instancedMesh args={[nodes.Cube016_Material009_0.geometry, materials.PaletteMaterial001, 6]} instanceMatrix={nodes.Cube016_Material009_0.instanceMatrix} />
      <instancedMesh args={[nodes.Cube015_Material008_0.geometry, materials.PaletteMaterial001, 10]} instanceMatrix={nodes.Cube015_Material008_0.instanceMatrix} />
    </group>
  )
}

useGLTF.preload('/cake-transformed.glb')
