import React from "react";
import styled from "styled-components";

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
  width: 42px;
  height: 42px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
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
const navbarLinks = ["Home", "Stidio", "Works", "Contact"];

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/badge-tm.png"></Logo>
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
