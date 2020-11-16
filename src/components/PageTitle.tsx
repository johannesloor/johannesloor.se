import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/variables";
import { Link } from "gatsby";

type TitlePorps = {
  reversed?: boolean;
};

const Title = styled.div<TitlePorps>`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  justify-content: center;
  width: 100vw;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${colors.background};
`;

const PageName = styled.h1`
  padding: 0 1rem;
`;

const StyledLink = styled(Link)`
  color: black;
  opacity: 0.4;
`;

interface PageTitleProps {
  currentPage?: string;
  linkedPage?: string;
  reverse?: boolean;
}

const PageTitle: React.FC<PageTitleProps> = ({
  children,
  currentPage,
  linkedPage,
  reverse,
}) => (
  <>
    {linkedPage && currentPage ? (
      <Title reversed={reverse}>
        <PageName>
          <StyledLink to={`/${linkedPage.toLowerCase()}`}>
            {linkedPage}
          </StyledLink>
        </PageName>
        <PageName>{currentPage}</PageName>
      </Title>
    ) : (
      <Title>{children}</Title>
    )}
  </>
);

export default PageTitle;
