import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import { skills } from "../utils/constants";
import WorksCanvasContainer from "../containers/works-canvas-container";
import { Computer, Phone, Website } from "./canvas/_index";

export default function Works() {
  const [work, setWork] = useState("Mobile Application");
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <Section>
      <Container ref={ref} isInView={isInView}>
        <Left>
          <List>
            {skills.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {
            {
              "Mobile Application": <WorksCanvasContainer render={<Phone />} />,
              Website: <WorksCanvasContainer render={<Website />} />,
              "Web Application": <WorksCanvasContainer render={<Computer />} />,
            }[work]
          }
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled(motion.div)`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  transform: ${(props) => (props.isInView ? "none" : "translateX(-200px)")};
  opacity: ${(props) => (props.isInView ? 1 : 0)};
  transition: all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 75px;
  cursor: pointer;
  color: #7954f2;
  position: relative;
  white-space: nowrap;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #b9b6bab3;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;
