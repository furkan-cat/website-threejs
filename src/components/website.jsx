import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Website(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/website-transformed.glb");
  const { actions } = useAnimations(animations, group);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[0, 4, 0]}>
          <group
            name="d8bde75e6d8141a2b55480f5dc882ce1fbx"
            rotation={[0, 1, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="pSphere1"
                  position={[0.85, 5.16, 3.05]}
                  scale={[0.04, 0.12, 0.12]}
                >
                  <mesh
                    name="pSphere1_azul_escuro_0"
                    geometry={nodes.pSphere1_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pSphere2"
                  position={[0.85, 5.16, 2.44]}
                  scale={[0.04, 0.12, 0.12]}
                >
                  <mesh
                    name="pSphere2_azul_escuro_0"
                    geometry={nodes.pSphere2_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pSphere3"
                  position={[0.85, 5.16, 1.86]}
                  scale={[0.04, 0.12, 0.12]}
                >
                  <mesh
                    name="pSphere3_azul_escuro_0"
                    geometry={nodes.pSphere3_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pCube1"
                  position={[-0.12, 4.5, 0]}
                  scale={[0.3, 7.77, 13.22]}
                >
                  <mesh
                    name="pCube1_verde_0"
                    geometry={nodes.pCube1_verde_0.geometry}
                    material={materials.verde}
                  />
                </group>
                <group
                  name="pCube2"
                  position={[0.21, 4.5, 0]}
                  scale={[0.1, 6.32, 10.75]}
                >
                  <mesh
                    name="pCube2_azul_0"
                    geometry={nodes.pCube2_azul_0.geometry}
                    material={materials.azul}
                  />
                </group>
                <group
                  name="pCube3"
                  position={[0.68, 3.74, 2.41]}
                  scale={[0.1, 3.67, 4.55]}
                >
                  <mesh
                    name="pCube3_amarelo_0"
                    geometry={nodes.pCube3_amarelo_0.geometry}
                    material={materials.amarelo}
                  />
                </group>
                <group
                  name="pCube4"
                  position={[0.68, 3.74, -2.44]}
                  scale={[0.1, 3.67, 4.55]}
                >
                  <mesh
                    name="pCube4_laranja_0"
                    geometry={nodes.pCube4_laranja_0.geometry}
                    material={materials.laranja}
                  />
                </group>
                <group
                  name="pCylinder1"
                  position={[0.84, 4.46, -3.24]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.62, 0.04, 0.62]}
                >
                  <mesh
                    name="pCylinder1_amarelo_0"
                    geometry={nodes.pCylinder1_amarelo_0.geometry}
                    material={materials.amarelo}
                  />
                </group>
                <group
                  name="pCone3"
                  position={[0.37, -0.25, -0.64]}
                  scale={[1, 0.82, 0.82]}
                >
                  <mesh
                    name="pCone3_azul_escuro_0"
                    geometry={nodes.pCone3_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pCylinder2"
                  position={[2.31, 4.24, -0.03]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.06, 6.47, 0.2]}
                >
                  <mesh
                    name="pCylinder2_amarelo_0"
                    geometry={nodes.pCylinder2_amarelo_0.geometry}
                    material={materials.amarelo}
                  />
                </group>
                <group
                  name="pCylinder3"
                  position={[1.73, 3.8, 2.44]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 2.3, 0.07]}
                >
                  <mesh
                    name="pCylinder3_azul_0"
                    geometry={nodes.pCylinder3_azul_0.geometry}
                    material={materials.azul}
                  />
                </group>
                <group
                  name="pCylinder4"
                  position={[1.73, 3.17, 2.44]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 2.3, 0.07]}
                >
                  <mesh
                    name="pCylinder4_azul_0"
                    geometry={nodes.pCylinder4_azul_0.geometry}
                    material={materials.azul}
                  />
                </group>
                <group
                  name="pCylinder5"
                  position={[1.73, 2.55, 2.44]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 2.3, 0.07]}
                >
                  <mesh
                    name="pCylinder5_azul_0"
                    geometry={nodes.pCylinder5_azul_0.geometry}
                    material={materials.azul}
                  />
                </group>
                <group
                  name="pCylinder6"
                  position={[2.8, 0.11, 2.4]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.06, 1.36, 0.2]}
                >
                  <mesh
                    name="pCylinder6_verde_0"
                    geometry={nodes.pCylinder6_verde_0.geometry}
                    material={materials.verde}
                  />
                </group>
                <group
                  name="pSphere4"
                  position={[0.39, 7.21, 4.76]}
                  scale={[0.04, 0.16, 0.16]}
                >
                  <mesh
                    name="pSphere4_verde_0"
                    geometry={nodes.pSphere4_verde_0.geometry}
                    material={materials.verde}
                  />
                </group>
                <group
                  name="pSphere5"
                  position={[0.39, 7.21, 4.33]}
                  scale={[0.04, 0.16, 0.16]}
                >
                  <mesh
                    name="pSphere5_azul_escuro_0"
                    geometry={nodes.pSphere5_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pSphere6"
                  position={[0.39, 7.21, 3.92]}
                  scale={[0.04, 0.16, 0.16]}
                >
                  <mesh
                    name="pSphere6_amarelo_0"
                    geometry={nodes.pSphere6_amarelo_0.geometry}
                    material={materials.amarelo}
                  />
                </group>
                <group
                  name="pCube5"
                  position={[0.39, 3.91, -5.3]}
                  rotation={[-0.32, 0, 0]}
                  scale={[0.1, 3.92, 3.94]}
                >
                  <mesh
                    name="pCube5_verde_0"
                    geometry={nodes.pCube5_verde_0.geometry}
                    material={materials.verde}
                  />
                </group>
                <group
                  name="pCube6"
                  position={[0.51, 4.11, -5.36]}
                  rotation={[-0.32, 0, 0]}
                  scale={[0.1, 2.58, 3.12]}
                >
                  <mesh
                    name="pCube6_amarelo_0"
                    geometry={nodes.pCube6_amarelo_0.geometry}
                    material={materials.amarelo}
                  />
                </group>
                <group
                  name="pCube7"
                  position={[0.98, 5.58, -6.67]}
                  scale={[0.1, 0.75, 2.32]}
                >
                  <mesh
                    name="pCube7_laranja_0"
                    geometry={nodes.pCube7_laranja_0.geometry}
                    material={materials.laranja}
                  />
                </group>
                <group
                  name="pSphere7"
                  position={[1.15, 5.58, -5.93]}
                  scale={[0.04, 0.24, 0.24]}
                >
                  <mesh
                    name="pSphere7_azul_escuro_0"
                    geometry={nodes.pSphere7_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pSphere8"
                  position={[1.15, 4.68, -5.93]}
                  scale={[0.04, 0.24, 0.24]}
                >
                  <mesh
                    name="pSphere8_azul_0"
                    geometry={nodes.pSphere8_azul_0.geometry}
                    material={materials.azul}
                  />
                </group>
                <group
                  name="pCube8"
                  position={[0.98, 4.67, -6.67]}
                  scale={[0.1, 0.75, 2.32]}
                >
                  <mesh
                    name="pCube8_laranja_0"
                    geometry={nodes.pCube8_laranja_0.geometry}
                    material={materials.laranja}
                  />
                </group>
                <group
                  name="pSphere9"
                  position={[1.15, 6.48, -5.93]}
                  scale={[0.04, 0.24, 0.24]}
                >
                  <mesh
                    name="pSphere9_verde_0"
                    geometry={nodes.pSphere9_verde_0.geometry}
                    material={materials.verde}
                  />
                </group>
                <group
                  name="pCube9"
                  position={[0.98, 6.47, -6.67]}
                  scale={[0.1, 0.75, 2.32]}
                >
                  <mesh
                    name="pCube9_laranja_0"
                    geometry={nodes.pCube9_laranja_0.geometry}
                    material={materials.laranja}
                  />
                </group>
                <group
                  name="pCylinder7"
                  position={[2.05, 5.85, -7.01]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.9, 0.07]}
                >
                  <mesh
                    name="pCylinder7_branco_0"
                    geometry={nodes.pCylinder7_branco_0.geometry}
                    material={materials.branco}
                  />
                </group>
                <group
                  name="pCylinder8"
                  position={[2.05, 5.62, -6.75]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.56, 0.07]}
                >
                  <mesh
                    name="pCylinder8_branco_0"
                    geometry={nodes.pCylinder8_branco_0.geometry}
                    material={materials.branco}
                  />
                </group>
                <group
                  name="pCylinder9"
                  position={[2.05, 4.92, -6.75]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.56, 0.07]}
                >
                  <mesh
                    name="pCylinder9_branco_0"
                    geometry={nodes.pCylinder9_branco_0.geometry}
                    material={materials.branco}
                  />
                </group>
                <group
                  name="pCylinder10"
                  position={[2.05, 4.04, -6.98]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.95, 0.07]}
                >
                  <mesh
                    name="pCylinder10_branco_0"
                    geometry={nodes.pCylinder10_branco_0.geometry}
                    material={materials.branco}
                  />
                </group>
                <group
                  name="pCylinder11"
                  position={[2.05, 3.83, -6.98]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.95, 0.07]}
                >
                  <mesh
                    name="pCylinder11_branco_0"
                    geometry={nodes.pCylinder11_branco_0.geometry}
                    material={materials.branco}
                  />
                </group>
                <group
                  name="pCylinder12"
                  position={[2.05, 3.62, -6.98]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.95, 0.07]}
                >
                  <mesh
                    name="pCylinder12_branco_0"
                    geometry={nodes.pCylinder12_branco_0.geometry}
                    material={materials.branco}
                  />
                </group>
                <group name="pTorus1" position={[-0.31, -0.4, 0]}>
                  <mesh
                    name="pTorus1_laranja_0"
                    geometry={nodes.pTorus1_laranja_0.geometry}
                    material={materials.laranja}
                  />
                </group>
                <group
                  name="pCylinder13"
                  position={[1.38, 5.82, 2.84]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 2.3, 0.07]}
                >
                  <mesh
                    name="pCylinder13_azul_escuro_0"
                    geometry={nodes.pCylinder13_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pCylinder14"
                  position={[1.38, 5.82, 0.13]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.69, 0.07]}
                >
                  <mesh
                    name="pCylinder14_azul_escuro_0"
                    geometry={nodes.pCylinder14_azul_escuro_0.geometry}
                    material={materials.azul_escuro}
                  />
                </group>
                <group
                  name="pCylinder15"
                  position={[1.38, 5.82, 0.9]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.03, 0.25, 0.07]}
                >
                  <mesh
                    name="pCylinder15_verde_0"
                    geometry={nodes.pCylinder15_verde_0.geometry}
                    material={materials.verde}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/website-transformed.glb");
