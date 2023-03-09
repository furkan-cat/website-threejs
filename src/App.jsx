import styled from "styled-components";
import { Contact, Hero, WhoAmI, Works } from "./components/_index";
import useScrollIntoView from "./utils/hooks/useScrollIntoView";

export default function App() {
  const [scrollToWhoAmI, setScrollToWhoAmI] = useScrollIntoView();
  const [scrollToWorks, setScrollToWorks] = useScrollIntoView();
  const [scrollToContact, setScrollToContact] = useScrollIntoView();
  return (
    <Container>
      <Hero
        setStates={{ setScrollToWhoAmI, setScrollToWorks, setScrollToContact }}
      />
      <WhoAmI ref={scrollToWhoAmI} />
      <Works ref={scrollToWorks} />
      <Contact ref={scrollToContact} />
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
