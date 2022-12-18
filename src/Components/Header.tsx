import React from "react";
import styled from "styled-components";
import logo from "./images/logo.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} />

      <NavHold>
        <Nav>Features</Nav>
        <Nav>Templates</Nav>
        <Nav>Integrations</Nav>
        <Nav>Customers</Nav>
        <Nav>Enterprise</Nav>
        <Nav>Pricing</Nav>
      </NavHold>

      <NavAuth>
        <Nav>Contact</Nav>
        <Nav>Login</Nav>
        <Button>Sign Up</Button>
      </NavAuth>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #dcdedf;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
  object-fit: cover;
  cursor: pointer;
`;

const NavHold = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  margin-left: 18px;
  margin-right: 18px;
  color: gray;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;

  :hover {
    color: black;
    transition: all 400ms;
  }
`;

const NavAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  padding: 6px 16px;
  background-color: black;
  color: #fff;
  cursor: pointer;
  border-radius: 7px;
  font-weight: 400;

  :hover {
    background-color: #fff;
    color: black;
    transition: all 400ms;
    border: 1px solid black;
  }
`;

// const Logo = styled.div``
// const Logo = styled.div``
// const Logo = styled.div``
// const Logo = styled.div``
