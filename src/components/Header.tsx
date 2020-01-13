import * as React from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";

import { heights, dimensions, colors, breakpoints } from "../styles/variables";
import Container from "./Container";

interface HeaderProps {
  fontSize?: number;
  height?: number;
}

const StyledHeader = styled.header<HeaderProps>`
  height: ${props => {
    return props.height;
  }}px;
  @media (max-width: ${breakpoints.md + "px"}) {
    height: 70%;
  }
  @media (max-width: ${breakpoints.sm + "px"}) {
    height: 20%;
  }
  padding: ${dimensions.containerPadding}rem;
  background-color: ${colors.background};

  color: ${transparentize(0.5, colors.white)};
  position: sticky;
  top: 0;
  z-index: 1;
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  border: 1px solid transparent;
  border-radius: 25px;
  &:hover,
  &:focus {
    text-decoration: none;
    border-color: ${colors.hover};
  }
`;

const HomepageLink = styled(Link)<HeaderProps>`
  color: ${colors.black};
  font-size: ${props => {
    return props.fontSize;
  }}rem;
  @media (max-width: ${breakpoints.md + "px"}) {
    font-size: 62pt;
  }
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 37pt;
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
  &:hover {
    color: ${colors.hover};
  }
`;

//Divides input to elements of <Letter>
function DivideString(name: string) {
  let letters = [];
  for (var i = 0; i < name.length; i++) {
    letters.push(<Letter>{name[i]}</Letter>);
  }
  return letters;
}

const Header: React.FC<HeaderProps> = ({ fontSize, height }) => (
  <StyledHeader height={height ? height : heights.headerSmall}>
    <HeaderInner>
      <HomepageLink
        fontSize={fontSize ? fontSize : dimensions.headerFonts.small}
        to="/"
      >
        <FirstName>{DivideString("JOHANNES")}</FirstName>
        <LastName>{DivideString("LOOR")}</LastName>
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
