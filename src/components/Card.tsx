import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../styles/variables";
import { Link } from "gatsby";

const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: black;
  margin: 1rem;
  font-size: 21pt;
  text-align: center;
  border-radius: 25px;
  border: 2px solid black;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 15pt;
    margin: 0;
    margin-bottom: 2rem;
  }
  &:hover {
    border: 2px solid white;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

interface CardProps {
  url?: string;
}

const Card: React.FC<CardProps> = ({ children, url }) => (
  <CardLink to={url ? url : "/"}>{children}</CardLink>
);

export default Card;
