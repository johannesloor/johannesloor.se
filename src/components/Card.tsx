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
  background-color: #f0f8ff;
  border-radius: 25px;
  border: 2px solid transparent;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 15pt;
    width: 90vw;
    margin: 0;
    margin-bottom: 2rem;
  }
  &:hover {
    border-color: white;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

const ButtonText = styled.div`
  padding: 2rem;
`;

interface CardProps {
  url?: string;
}

const Card: React.FC<CardProps> = ({ children, url }) => (
  <CardLink to={url ? url : "/"}>
    <ButtonText>{children}</ButtonText>
  </CardLink>
);

export default Card;
