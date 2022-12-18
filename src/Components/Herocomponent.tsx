import React from "react";
import styled from "styled-components";
import bg from "./images/3.png";

const Hero: React.FC = () => {
  return (
    <Container>
      <TextHolder>
        <Next>NEXT</Next>
        <Js>.JS</Js>
        <Conf>CONF</Conf>
      </TextHolder>
      <ImageContainer>
        <BgImage src={bg} />
      </ImageContainer>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #dfe0e0;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 40px 40px rgba(224, 226, 227, 1);
`;

const TextHolder = styled.div`
  width: 320px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const Next = styled.h1`
  font-size: 65px;
  font-weight: 500;
`;
const Js = styled.h4`
  font-size: 20px;
  margin-top: 65px;
`;
const Conf = styled.h2`
  margin-left: 15px;
  margin-top: 25px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  padding: 6px;
`;

const BgImage = styled.img`
  height: 800px;
  width: 800px;
  margin-bottom: 100px;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
