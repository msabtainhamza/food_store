import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const [loading, setLoading] = useState(true);
  const { nodes, materials } = useGLTF('./ramen_noodles-transformed.glb');

  useEffect(() => {
    const loadModel = async () => {
      try {
        await useGLTF.preload('./ramen_noodles-transformed.glb');
        setTimeout(() => {
          setLoading(false);
        }, 10000);
      } catch (error) {
        console.error('Error loading 3D model', error);
      }
    };

    loadModel();

    return () => {
      // Cleanup if necessary
    };
  }, []);

  if (loading) return null; // Render nothing while loading

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Ramen_Bake} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}
