import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import CanvasLoader from "../CanvasLoader";

const HeroCanvas = () => {
  return (
    <div className="absolute top-0 w-full h-screen">
      <Canvas shadows camera={{ position: [20, 3, 5], fov: 25 }}>
        <Computer />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

const Computer = () => {
  const computer = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");
  const [scale, setScale] = useState(0.75);
  const { viewport } = useThree();
  useEffect(() => {
    if (viewport.width < 10) {
      setScale(0.5);
    }
    console.log(viewport.width);
  }, [viewport]);
  return (
    <Suspense fallback={<CanvasLoader />}>
      <mesh>
        <primitive
          scale={scale}
          rotation={[-0.01, -0.2, -0.1]}
          position={[0, -2.25, -1.5]}
          object={computer.scene}
        />
        <hemisphereLight intensity={1} />
        <spotLight />
      </mesh>
    </Suspense>
  );
};

export default HeroCanvas;
