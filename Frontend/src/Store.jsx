import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

const Model = () => {
  // Ensure the path is correct and accessible
  const { scene } = useGLTF('/coffe_shop.glb', true);
  scene.scale.set(5,5,5);
  return <primitive object={scene} />;
};
const Store = () => {
  return (
    <Canvas style={{ width: '50vw', height: '50vh' }}>
      <ambientLight />
        <OrbitControls enableZoom={false}/>
        <Suspense>
        <Model />
        </Suspense>
    </Canvas>
  );
};

export default Store;
