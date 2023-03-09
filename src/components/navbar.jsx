import styled from "styled-components";

export default function Navbar(props) {
  const { setStates } = props;
  const { setScrollToWhoAmI, setScrollToWorks, setScrollToContact } = setStates;

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png"></Logo>
          <List>
            <ListItem onClick={() => setScrollToWhoAmI(true)}>
              Who am I?
            </ListItem>
            <ListItem onClick={() => setScrollToWorks(true)}>Works</ListItem>
            <ListItem onClick={() => setScrollToContact(true)}>
              Contact
            </ListItem>
          </List>
        </Links>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  max-width: 1400px;
  z-index: 9999;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    gap: 25px;
  }
`;

const Logo = styled.img`
  background-color: #cabcca;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  opacity: 0.7;
  transition: all 0.3s;

  @media only screen and (max-width: 768px) {
    width: 26px;
    height: 26px;
  }

  &:hover {
    opacity: 1;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;

  @media only screen and (max-width: 1024px) {
    gap: 30px;
  }

  @media only screen and (max-width: 768px) {
    gap: 25px;
  }
`;

const ListItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  font-family: verdana;
  letter-spacing: 2px;
  width: 130px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  color: #ffffffa3;
  position: relative;
  transition: color 0.2s ease-in;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.5px;
    width: max-content;
  }

  &:hover {
    color: #ffffffe8;
  }
  &::before {
    content: "";
    position: absolute;
    height: 75px;
    width: 80px;
    left: 50%;
    transform: translate(-50%, -25%);
    border-bottom: 4px solid #663678a4;
    transition: all 0.3s ease;

    @media only screen and (max-width: 768px) {
      width: 60px;
    }
  }
  &:hover::before {
    border-bottom-color: #834a97cf;
    width: 40px;

    @media only screen and (max-width: 768px) {
      width: 30px;
    }
  }
`;
