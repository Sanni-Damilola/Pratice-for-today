import React from "react";
import styled from "styled-components";

interface props {
  H1_txt: string;
  Span_txt: string;
}

const Fast_refreach: React.FC<props> = ({ H1_txt, Span_txt }) => {
  return (
    <Container>
      <H1>{H1_txt}</H1>
      <Span>{Span_txt}</Span>
    </Container>
  );
};

export default Fast_refreach;

const Container = styled.div``;
const H1 = styled.h2`
  margin: 0%;
  margin-bottom: 10px;
`;
const Span = styled.span`
  color: rgb(102, 102, 102);
  line-height: 25px;
  font-size: 19px;
  font-weight: 400;
`;
