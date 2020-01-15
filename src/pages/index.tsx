import * as React from "react";
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
  margin-top: 90px;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.xs + "px"}) {
    margin-top: 60px;
  }
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 20pt;
  }
`;

const ButtonText = styled.div`
  padding: 3rem;
  @media (max-width: ${breakpoints.xs + "px"}) {
    padding: 2rem;
  }
`;

const IndexPage = () => (
  <IndexLayout fontSize={8} height={heights.headerBig}>
    <Page>
      <Container>
        <Title>Developer, engineer and Apple enthusiast</Title>
        <CardWrapper>
          <Card url="/projects">
            <ButtonText>Projects</ButtonText>
          </Card>
          <Card url="/">
            <ButtonText>About me</ButtonText>
          </Card>
        </CardWrapper>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
