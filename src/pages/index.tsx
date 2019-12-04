import * as React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import Card from "../components/Card";

import { heights, breakpoints } from "../styles/variables";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 20pt;
  }
`;

const IndexPage = () => (
  <IndexLayout fontSize={8} height={heights.headerBig}>
    <Page>
      <Container>
        <Title>Developer, engineer and Apple enthusiast</Title>
        <CardWrapper>
          <Card url="/projects" title="Projects"></Card>
          <Card url="/" title="About me"></Card>
        </CardWrapper>
        <CardWrapper>
          <Card url="/" title="CV"></Card>
          <Card url="/" title="Other stuff"></Card>
        </CardWrapper>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
