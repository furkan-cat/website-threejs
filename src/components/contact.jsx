import React, { useRef, useState, forwardRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Contact = (props, scrollToRef ) => {
  const ref = useRef();
  console.log(scrollToRef);
  const [success, setSuccess] = useState(null);
  const [scrollToRef, setScrollTo] = useScrollIntoView();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_moihp5n",
        "template_5w9vp8c",
        ref.current,
        "dolT_PFX9kb88RwJI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section ref={scrollToRef}>
      <Container>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Title>Contact Us</Title>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Email" name="email" />
          <TextArea placeholder="Write your message" name="message" rows={10} />
          <Button type="submit">Send</Button>
          {success &&
            "Your message has been sent. We'll get back to you soon :)"}
        </Form>
      </Container>
    </Section>
  );
};

export default forwardRef(Contact);

const Section = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;
