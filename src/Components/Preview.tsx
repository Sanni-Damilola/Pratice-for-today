import React from "react";
import styled from "styled-components";
import Child_Text from "./Text";

const Preview = () => {
  return (
    <Container>
      <hr></hr>
      <Text2>Preview</Text2>
      <Text3>Accelerate with your team</Text3>
      <Circle>2</Circle>
      <Text4>
        Frontend development is not meant to be a solo activity. The Vercel
        platform makes it a <br /> collaborative experience with deploy previews
        for every code change, by seamlessly integrating <br /> with{" "}
        <span>GitHub</span>, <span>GitLab</span>, and <span>Bitbucket</span>.
      </Text4>
    </Container>
  );
};

export default Preview;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  hr {
    border: 1px solid #dd0a92;
    margin-top: 100px;
    margin-bottom: 20px;
    height: 150px;
    background-color: #dd0a92;
  }

  position: relative;
`;
const Text1 = styled.span`
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3.2px;
  color: rgb(0, 0, 0, 0.7);
  line-height: 18px;
`;
const Text2 = styled.h3`
  font-size: 35px;
  font-weight: 700;
  background-image: linear-gradient(to right, #8225c5, #dd0a92);
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
  top: 40%;
  background-color: #dd0a92;
`;

const Text4 = styled.span`
  margin-top: 20px;
  color: rgb(102, 102, 102);
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;

  span {
    color: #dd0a92;

    cursor: pointer;

    :hover{
      color: rgb(102, 102, 102);
      transition: all 400ms;
    }
  }
`;
