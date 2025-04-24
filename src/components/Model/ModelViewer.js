'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import React, { Suspense } from 'react';

function Model({ path }) {
  const { scene } = useGLTF(path);
  return (
    <Center>
      <primitive object={scene} scale={0.8} />
    </Center>
  );
}

export default function ModelViewer({ modelPath = '/models/bot.gltf', className = 'w-full h-[500px]' }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model path={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
