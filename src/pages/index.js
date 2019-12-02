import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

export default () => (
  <div>
    <h1>JOHANNES LOOR</h1>
    <Link to="/projects">
      <Button>Projects</Button>
    </Link>
    <Link to="/projects">
      <Button>CV</Button>
    </Link>
    <Link to="/projects">
      <Button>Bio</Button>
    </Link>
    <Link to="/projects">
      <Button>Contact</Button>
    </Link>
  </div>
);
const Button = styled.button`
  padding: 32px;
  background-color: green;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
