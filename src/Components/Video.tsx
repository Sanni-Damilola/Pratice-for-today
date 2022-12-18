import React from "react";
import styled from "styled-components";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "../Components/images/plant-pot-garden-isolated-icon-vector-illustration-design_24877-13119-removebg-preview.png";
import Fast_refreach from "./Fast_refreach";

const Video = () => {
  return (
    <Container>
      <Viedo>
        <Circle>
          <Div1></Div1>
          <Div2></Div2>
          <Div3></Div3>
        </Circle>
        <Box1>
          <Index>index.js</Index>
          <hr />
          <Code>
            <CodeC>{"sanni"}</CodeC>
          </Code>
        </Box1>
        <Box2>
          <Circle>
            <Div1></Div1>
            <Div2></Div2>
            <Div3></Div3>
          </Circle>
          <Div>
            <Span>localhost:3000</Span>
            <Icon>
              <IoMdRefresh />
            </Icon>
          </Div>
          <hr />
          <Addtocart_wrapper>
            <Wrapper>
              <Icon1>
                <AiOutlineShoppingCart />
              </Icon1>
              <Wire>
                <Black></Black>
                <Gray></Gray>
              </Wire>
            </Wrapper>

            <Wrapper2>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Wrapper2>
          </Addtocart_wrapper>
          <Flower_wrapper>
            <Flower>
              <Img src={Image} />
            </Flower>

            <Wire1>
              <Child_wire>
                <B></B>
                <Dollar>$$$</Dollar>
              </Child_wire>
              <Child_wire2></Child_wire2>
            </Wire1>
          </Flower_wrapper>
        </Box2>
      </Viedo>

      <Text_wrapper>
        <Fast_refreach
          H1_txt="Fast Refresh"
          Span_txt="Reliable live-editing experience for your UI components."
        />
        <Fast_refreach
          H1_txt="Flexible Data Fetching"
          Span_txt="Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment."
        />
        <Fast_refreach
          H1_txt="Edge on Localhost"
          Span_txt="From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.

"
        />
      </Text_wrapper>
    </Container>
  );
};

export default Video;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Text_wrapper = styled.div`
  width: 40%;
  height: 400px;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
`;

const Flower = styled.div`
  width: 150px;
  height: 150px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-left: 55px;
`

const Wire1 = styled.div`
  width: 60%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
`;

const Child_wire = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

const Child_wire2 = styled.div`
  width: 87%;
  height: 200px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: lightgray;
`;

const B = styled.div`
  width: 160px;
  height: 80%;
  background-color: lightgray;
  border-radius: 5px;
`;
const Dollar = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #b35732;
  color: white;
`;
const Flower_wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  height: 50%;
`;

const Viedo = styled.div`
  position: relative;
`;
const Box1 = styled.div`
  width: 500px;
  height: 350px;
  border: 1px solid rgb(102, 102, 102, 0.2);
  border-top: 1px solid #fff;
  margin: 20px;
  border-radius: 5px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  hr {
    width: 100%;
    background-color: rgb(102, 102, 102);
    position: absolute;
    opacity: 40%;
    top: 10%;
    z-index: 50;
  }
`;
const Box2 = styled.div`
  width: 500px;
  height: 350px;
  border: 1px solid rgb(102, 102, 102, 0.2);
  border-top: 1px solid #fff;
  margin: 20px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 10%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  hr {
    width: 100%;
    background-color: rgb(102, 102, 102);
    position: absolute;
    opacity: 40%;
    top: 14%;
    z-index: 50;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
`;

const Wrapper2 = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  div {
    width: 50px;
    height: 8px;
    background-color: lightgray;
    border-radius: 15px;
  }
`;

const Wire = styled.div`
  flex-direction: column;
  display: flex;
  height: 50%;
  justify-content: center;
  justify-content: space-between;
`;

const Black = styled.div`
  width: 50px;
  height: 9px;
  background-color: black;
  border-radius: 10px;
`;
const Gray = styled.div`
  padding: 4px 35px;
  background-color: lightgray;
  border-radius: 15px;
`;

const Circle = styled.div`
  display: flex;
  position: absolute;
  top: 7%;
  left: 5%;
`;
const Icon1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: black;
  color: white;
  font-size: 20px;
`;

const Div1 = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #ff5f56;
  margin: 3px;
`;
const Div2 = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #ffbd2e;
  margin: 3px;
`;
const Div3 = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #27c93f;
  margin: 3px;
`;

const Index = styled.div`
  width: 79px;
  height: 40px;
  border: 1px solid rgb(102, 102, 102, 0.2);
  margin-left: 80px;
  font-size: 12px;
  border-radius: 4px;
  color: rgb(102, 102, 102);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid white;
  font-weight: 500;
  opacity: 70%;
`;

const Span = styled.span`
  color: rgb(102, 102, 102);
  display: flex;
  font-size: 14px;
  justify-content: center;
  font-weight: 500;
  opacity: 70%;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  opacity: 50%;
`;

const Code = styled.div`
  margin-top: 10px;
`;

const Addtocart_wrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const CodeC = styled.code`
  color: red;
`;
