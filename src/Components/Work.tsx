import React from "react";
import styled from "styled-components";
import image1 from "../Components/images/nextjs-icon-dark-background-removebg-preview.png";
import image2 from "../Components/images/2.png";
import image3 from "../Components/images/93280726_3303703976315615_2422698473653534720_n.png";
import image4 from "../Components/images/sdsd.png";
import image5 from "../Components/images/Threads-Placeholder-380x380.jpg";
import image6 from "../Components/images/83555752-fd1bdf00-a4cb-11ea-9592-c0909a626b48.png";
import image7 from "../Components/images/Threads-Placeholder-380x3801.jpg";
import image8 from "../Components/images/png-transparent-hexo-logos-brands-icon-thumbnail.png";
import image9 from "../Components/images/download.png";

const Work = () => {
  return (
    <Container>
      <Txt>WORKS WITH 30+ FRAMEWORKS</Txt>
      <Icons>
        <Img src={image1} />
        <Img src={image2} />
        <Img src={image3} />
        <Img src={image4} />
        <Img src={image5} />
        <Img src={image6} />
        <Img src={image7} />
        <Img src={image8} />
        <Img src={image9} />
      </Icons>
    </Container>
  );
};

export default Work;

const Container = styled.div`
  height: 70px;
  margin-top: 350px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
`;
const Txt = styled.div`
  font-weight: 700;
  letter-spacing: 3px;
  margin: 20px;
`;
const Icons = styled.div`
  display: flex;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 20px;
`;
