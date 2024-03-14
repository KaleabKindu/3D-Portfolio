import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import CanvasLoader from "../CanvasLoader";

const EarthCanvas = () => {
  return (
    <div className="relative hidden lg:block z-20 w-full h-full">
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <Earth />
          <OrbitControls autoRotate enableZoom={false} rotateSpeed={0.9} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Earth = () => {
  const earth = useLoader(GLTFLoader, "/planet/scene.gltf");
  return (
    <mesh>
      <primitive scale={2.5} object={earth.scene} />
      <ambientLight intensity={1} />
    </mesh>
  );
};

export default EarthCanvas;
