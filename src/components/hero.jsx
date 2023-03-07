import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import styled from "styled-components";
import { quotes } from "../constants";
import Navbar from "./navbar";

export default function Hero() {
  const [quote, setQuote] = useState(quotes[2]);

  function clickHandler() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote]);
  }

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think It! Make It!</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Are you still waiting?</Subtitle>
          </WhatWeDo>
          <Desc>{quote}</Desc>
          <Button onClick={clickHandler}>Give Me More Quotes</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.65}>
              <MeshDistortMaterial color="#3d1c56" distort={0.5} speed={1.75} />
            </Sphere>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  font-size: 26px;
  font-weight: 400;
  opacity: 1;
  color: #da4ea2dd;
  animation: opacity 1s infinite ease alternate;

  @keyframes opacity {
    to {
      opacity: 0.75;
      color: #dc64acdd;
    }
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-size: 18px;
  font-weight: 600;
  width: max-content;
  padding: 15px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #231f22c2;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
