import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Counter_down: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/9/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      sethours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  },);

  return (
    <Container>
      <Text>An online experience developers love • October 25, 2022</Text>
      <Time>
        <Dhms>
          <Tday>{days}:</Tday>
          <pre>Days</pre>
        </Dhms>

        <Dhms>
          <Tday>{hours}:</Tday>
          <pre>Hours</pre>
        </Dhms>

        <Dhms>
          <Tday>{minutes}:</Tday>
          <pre>Minutes</pre>
        </Dhms>

        <Dhms>
          <Tday>{seconds}</Tday>
          <pre>Seconds</pre>
        </Dhms>
      </Time>
      <Button>Register Now</Button>
    </Container>
  );
};

export default Counter_down;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const Text = styled.pre`
  font-size: 15px;
  letter-spacing: 2px;
`;
const Time = styled.div`
  display: flex;
  justify-content: center;
`;
const Dhms = styled.div`
  pre {
    font-size: 13px;
    font-weight: 400;
    color: rgb(102, 102, 102);
  }
`;
const Tday = styled.span`
  font-size: 40px;
  font-weight: bold;
  margin-right: 20px;
  font-weight: 400;
  font-style: normal;
  font-family: monospace;
`;
const Button = styled.div`
  margin-top: 50px;
  padding: 11px 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 20px;
  cursor: pointer;
  transition: 400ms;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  :hover {
    transform: scale(0.9);
  }
`;
