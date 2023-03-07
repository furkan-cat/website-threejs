import styled from "styled-components";
import { Contact, Hero, WhoAmI, Works } from "./components/_index";

export default function App() {
  return (
    <Container>
      <Hero />
      <WhoAmI />
      <Works />
      <Contact />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background: url("./img/bg.jpeg");
  
  &::-webkit-scrollbar {
    display: none;
  }
`;