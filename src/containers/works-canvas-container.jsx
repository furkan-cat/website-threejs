import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function WorksCanvasContainer({ render }) {
  return (
    <Canvas>
      <Stage intensity={0.5} environment="city">
        {render}
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
