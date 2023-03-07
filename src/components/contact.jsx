import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Contact() {
  return (
    <Section>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
