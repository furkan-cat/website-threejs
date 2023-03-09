import { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import UseWindowSize from "../utils/hooks/useWindowSize";
import { quotes } from "../utils/constants";
import Navbar from "./navbar";

export default function Hero() {
  const [quote, setQuote] = useState(quotes[2]);
  const size = UseWindowSize();

  function clickHandler() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote]);
  }

  const device = size > 425 ? 1.45 : size > 1440 ? 1.75 : 1;

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
            <Sphere args={[1, 100, 200]} scale={device}>
              <MeshDistortMaterial color="#3d1c56" distort={0.6} speed={1.5} />
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
  position: relative;

  @media only screen and (max-width: 768px) {
    justify-content: unset;
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    top: 45%;
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

const Left = styled.div`
  flex: 0 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-left: 200px;

  @media only screen and (max-width: 1440px) {
    padding-left: 125px;
  }

  @media only screen and (max-width: 1024px) {
    padding-left: 85px;
  }

  @media only screen and (max-width: 768px) {
    gap: 5px;
    align-items: center;
    padding-left: unset;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  white-space: wrap;

  @media only screen and (max-width: 768px) {
    font-size: 48px;
    /* text-align: center; */
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

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }

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
    font-size: 20px;
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
  flex: 0 1 auto;
  width: 100%;
  height: 100%;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 0 1 1;
  }
`;

const Img = styled.img`
  width: 600px;
  height: 425px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 1400px) {
    width: 550px;
    height: 480px;
  }
  @media only screen and (max-width: 1024px) {
    width: 450px;
    height: 375px;
  }
  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 325px;
  }
  @media only screen and (max-width: 425px) {
    width: 300px;
    height: 250px;
  }

  @keyframes animate {
    to {
      transform: translate(20px, 10px);
    }
  }
`;
