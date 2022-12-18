import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <Container>
      <Child_Text>
        Developers love <span>Next.js</span>, the open source React framework
        Vercel {""} built together with Google and Facebook. Next.js powers the
        <br />
        biggest websites like <span>Patreon</span>, for use cases
        <span>in e-commerce</span>,<span> travel</span>, <br />
        <span>news</span>, and <span>marketing</span>.
      </Child_Text>
      <Child_Text>
        Vercel is the best place to deploy any frontend app. Start by <br />
        deploying with zero configuration to our{" "}
        <span>global edge network</span>. <br /> <span>Scale dynamically</span>{" "}
        to millions of pages without breaking a sweat.
      </Child_Text>
    </Container>
  );
};

export default Text;

const Container = styled.div`
  margin: 70px;
  display: flex;
  justify-content: space-between;

  span {
    color: #187aef;
    cursor: pointer;

    :hover {
      color: rgb(102, 102, 102);
      transition: all 400ms;
    }
  }
`;

const Child_Text = styled.p`
  width: 560px;
  color: rgb(102, 102, 102);
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
`;
