import * as React from "react";
import { Link } from "gatsby";

import styled from "@emotion/styled";
import { heights, breakpoints } from "../styles/variables";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import Card from "../components/Card";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
  }
`;

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Projects</h1>
        <CardWrapper>
          <Card url="/brushi">
            <h3>Brushi</h3>
            Brushi jifjdfkj jf kljfk ljklfj akl jfklj kl aafdlöakfölklödskf
            ölakdlöakfölköasfkö
          </Card>
          <Card url="/pepper">Pepper</Card>
        </CardWrapper>
        <CardWrapper>
          <Card url="/synthesEYEzer">SynthesEYEzer</Card>
          <Card url="/pepper">Pepper</Card>
        </CardWrapper>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageTwo;
