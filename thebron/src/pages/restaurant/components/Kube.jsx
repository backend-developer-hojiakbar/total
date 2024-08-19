import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const meshRef = React.useRef();

  // Rotate the box on each frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const ThreeDBox = () => {
  return (
    <Canvas shadowMap camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />

      {/* Render the 3D box */}
      <Box />

      {/* Add orbit controls to enable user interaction */}
      <OrbitControls enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default ThreeDBox;
