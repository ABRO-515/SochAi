'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import React, { Suspense } from 'react';

function Model({ path }) {
  const { scene, nodes } = useGLTF(path);
  
  const whiteMaterial = new THREE.MeshStandardMaterial({ 
    color: 'white',
    metalness: 0.2, // Reduced from 1
    roughness: 0.6  // Increased from 0.2
  });

  // Apply materials to nodes
  if (nodes?.Ellipse?.material) nodes.Ellipse.material = whiteMaterial;
  if (nodes?.Ellipse_2?.material) nodes.Ellipse_2.material = whiteMaterial;
  
  if (nodes?.Cube_3?.material) {
    nodes.Cube_3.material = new THREE.MeshStandardMaterial({
      color: 'black',
      metalness: 0.8, // Reduced from 1
      roughness: 0.5  // Increased from 0.2
    });
  }
  
  if (nodes?.droid?.material) {
    nodes.droid.material = new THREE.MeshStandardMaterial({
      color: 'yellow',
      metalness: 0.3, // Reduced from 1
      roughness: 0.6  // Increased from 0.2
    });
  }
  
  if (nodes?.Cube?.material) {
    nodes.Cube.material = new THREE.MeshStandardMaterial({
      color: 'red',
      metalness: 0.3 , // Reduced from 1
      roughness: 0.5  // Increased from 0.2
    });
  }

  const blueMaterial = new THREE.MeshStandardMaterial({ 
    color: '#0035ff',
    metalness: 0.3,
    roughness: 0.4
  });

  if (nodes.arm_1?.children?.[0]) nodes.arm_1.children[0].material = blueMaterial;
  if (nodes.arm_2?.children?.[0]) nodes.arm_2.children[0].material = blueMaterial;

  return (
    <group scale={0.8}>
      <primitive object={scene} />
    </group>
  );
}

export default function ModelViewer({ modelPath = '/models/bot.gltf', className = 'w-full h-[500px]' }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        {/* Improved Lighting Setup */}
        <ambientLight intensity={0.3} />
        <hemisphereLight intensity={0.5} color="#87CEEB" groundColor="#3A5F0B" />
        
        {/* Key directional lights */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.3  }
          castShadow
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.8}
        />
        <directionalLight
          position={[0, -5, 0]}
          intensity={0.5}
        />
        
        {/* Optional: Environment lighting for better reflections */}
        <Environment preset="night" />
        
        <Suspense fallback={null}>
          <Model path={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}