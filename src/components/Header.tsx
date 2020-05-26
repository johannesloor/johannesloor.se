import * as React from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";

import { dimensions, colors, breakpoints } from "../styles/variables";
import Container from "./Container";
import Clock from "./Clock";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${breakpoints.md + "px"}) {
    height: 70%;
  }
  @media (max-width: ${breakpoints.sm + "px"}) {
    height: 20%;
  }
  padding: ${dimensions.containerPadding}rem;
  background-color: ${colors.background};
  color: ${transparentize(0.5, colors.white)};
  z-index: 1;
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  border: 1px solid transparent;
  border-radius: 25px;
  
  &:hover,
  &:focus {
    text-decoration: none;
    /*border-color: ${colors.hover};*/
  }
`;

const HomepageLink = styled(Link)`
  color: ${colors.black};
  font-size: ${dimensions.headerFonts.large + "rem"};

  @media (max-width: ${breakpoints.xl + "px"}) {
    font-size: ${dimensions.headerFonts.medium + "rem"};
  }
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: ${dimensions.headerFonts.small + "rem"};
  }
  @media (max-width: ${breakpoints.xs + "px"}) {
    font-size: ${dimensions.headerFonts.xsmall + "rem"};
  }

  font-weight: 60;
  transition: 0.2s;
  padding-left: 15px;
  padding-right: 15px;
  margin: 2px;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const FirstName = styled.div`
  display: block;
  line-height: 1;
`;

const LastName = styled(FirstName)`
  text-align: right;
`;

const Letter = styled.div`
  display: inline-block;
  animation: spin 6s linear infinite;
  animation-play-state: paused;
  &:hover {
    color: ${colors.hover};
    animation-play-state: running;
  }
  @keyframes spin {
    100% {
      transform: rotate(2turn);
    }
  }
`;

//Divides input to elements of <Letter>
function DivideString(name: string) {
  let letters = [];
  for (var i = 0; i < name.length; i++) {
    letters.push(<Letter key={i.toString()}>{name[i]}</Letter>);
  }
  return letters;
}

const Header: React.FC = () => (
  <StyledHeader>
    <Clock></Clock>
    <HeaderInner>
      <HomepageLink to="/">
        <FirstName>{DivideString("JOHANNES")}</FirstName>
        <LastName>{DivideString("LOOR")}</LastName>
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
