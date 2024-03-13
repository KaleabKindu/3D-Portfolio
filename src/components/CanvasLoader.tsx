import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html style={{ fontSize: "20px", fontWeight: "bold" }} center>
      {progress.toFixed()}% Loaded
    </Html>
  );
};

export default CanvasLoader;
