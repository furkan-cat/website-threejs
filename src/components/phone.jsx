import { useGLTF } from "@react-three/drei";

export default function Phone(props) {
  const { nodes, materials } = useGLTF("/phone-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-89.01, -25.51, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[44.74, 21.86, 44.74]}
      >
        <mesh geometry={nodes.Cube_back_0.geometry} material={materials.back} />
        <mesh geometry={nodes.Cube_side_0.geometry} material={materials.side} />
        <mesh
          geometry={nodes.Cube_screen_0.geometry}
          material={materials.screen}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/phone-transformed.glb");
