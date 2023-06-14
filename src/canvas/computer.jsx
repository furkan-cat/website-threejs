import { useGLTF } from "@react-three/drei";

export default function Computer(props) {
  const { nodes, materials } = useGLTF("/computer-transformed.glb");

  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[0, 4.6, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Part2}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Part1}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/computer-transformed.glb");
