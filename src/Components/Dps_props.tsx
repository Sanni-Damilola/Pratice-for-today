import React from "react";
import styled from "styled-components";
import Child_Text from "./Text";

const Dps_props = () => {
  return (
    <Container>
      <Text1>EXPLORE THE VERCEL WAY</Text1>
      <hr></hr>
      <Text2>Develop</Text2>
      <Text3> Start with the developer</Text3>
      <Circle>2</Circle>

      <Child_Text />
    </Container>
  );
};

export default Dps_props;

const Container = styled.div`
  margin-top: 150px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    border: 1px solid #00cfdb;
    margin-top: 100px;
    margin-bottom: 20px;
    height: 150px;
    background-color: #00cfdb;
  }

  position: relative;
`;
const Text1 = styled.span`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 3.2px;
  line-height: 18px;
`;
const Text2 = styled.h3`
  font-size: 35px;
  font-weight: 700;
  background-image: linear-gradient(to right, #00a3e7, #00cfdb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Text3 = styled.h1`
  margin: 0;
  font-size: 70px;
  font-weight: 900;
`;

const Circle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  top: 30%;
  background-color: #00cfdb;
`;
