import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../styles/variables";
import { Link } from "gatsby";

const CardLink = styled(Link)`
  width: 100%;
  height: 100%;
  color: black;
  margin: 1rem;
  font-size: 21pt;
  text-align: center;
  background-color: ${colors.background};
  border-radius: 25px 0;
  border: 2px solid white;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 15pt;
    width: 90vw;
    margin: 0;
    margin-bottom: 2rem;
  }
  &:hover {
    background-color: ${colors.brand};
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

const ButtonText = styled.div`
  padding: 1.5rem 2rem;
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
