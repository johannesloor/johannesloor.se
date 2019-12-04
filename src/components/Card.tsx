import * as React from "react";
import styled from "@emotion/styled";
import { heights, dimensions, colors, breakpoints } from "../styles/variables";
import { Link } from "gatsby";

const CardLink = styled(Link)`
  width: 50%;
  height: 9rem;
  padding-top: 3rem;
  color: black;
  margin: 1rem;
  font-size: 21pt;
  text-align: center;
  border-radius: 25px;
  border: 2px solid black;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 15pt;
    height: 6rem;
    padding-bottom: 3rem;
    padding-top: 2rem;
  }
  &:hover {
    border-color: red;
    color: red;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

interface CardProps {
  title: string;
  url?: string;
}

const Card: React.FC<CardProps> = ({ title, url }) => (
  <CardLink to={url ? url : "/"}>{title}</CardLink>
);

export default Card;
