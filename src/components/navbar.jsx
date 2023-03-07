import styled from "styled-components";
import { navbarLinks } from "../constants";

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png"></Logo>
          <List>
            {navbarLinks.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
`;

const Logo = styled.img`
  background-color: #cabcca;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  opacity: 0.8;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 70px;
  list-style: none;
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

  &::before {
    content: "";
    position: absolute;
    height: 75px;
    width: 80px;
    left: 50%;
    transform: translate(-50%, -25%);
    border-bottom: 4px solid #663678a4;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ffffffe8;
  }

  &:hover::before {
    border-bottom-color: #834a97cf;
    width: 40px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: #fff;
  border: none;
  border-radius: 6px;
`;
