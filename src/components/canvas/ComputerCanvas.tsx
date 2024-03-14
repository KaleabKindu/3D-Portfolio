import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import CanvasLoader from "../CanvasLoader";

const ComputerCanvas = () => {
  return (
    <div className="relative hidden lg:block z-20 w-full h-full">
      <Canvas shadows camera={{ position: [20, 3, 5], fov: 25 }}>
        <Suspense fallback={<CanvasLoader />}>
          <Computer />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Computer = () => {
  const computer = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");
  return (
    <mesh>
      <primitive
        scale={0.75}
        rotation={[-0.01, -1, -0.1]}
        position={[0, -1.25, -1.5]}
        object={computer.scene}
      />
      <hemisphereLight intensity={1} />
      <ambientLight intensity={1} />
      <spotLight />
    </mesh>
  );
};

export default ComputerCanvas;
