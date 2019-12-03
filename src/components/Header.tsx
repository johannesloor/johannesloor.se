import * as React from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";

import { heights, dimensions, colors } from "../styles/variables";
import Container from "./Container";

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.white};
  color: ${transparentize(0.5, colors.white)};
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: ${colors.black};
  font-size: 8rem;
  font-weight: 200;
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
    color: red;
  }
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">
        <FirstName>
          <Letter>J</Letter>
          <Letter>O</Letter>
          <Letter>H</Letter>
          <Letter>A</Letter>
          <Letter>N</Letter>
          <Letter>N</Letter>
          <Letter>E</Letter>
          <Letter>S</Letter>
        </FirstName>
        <LastName>
          <Letter>L</Letter>
          <Letter>O</Letter>
          <Letter>O</Letter>
          <Letter>R</Letter>
        </LastName>
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
