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
  font-style: italic;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 20pt;
  }
`;

const VaryingWord = styled.div`
  display: inline;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  &:hover {
    color: red;
    top: -10px;
  }
`;

const ButtonText = styled.div`
  padding: 2rem;
  @media (max-width: ${breakpoints.xs + "px"}) {
    padding: 2rem;
  }
`;

let interests = ["Apple", "music", "smart home"];
let wordCount = Math.floor(Math.random() * Math.floor(interests.length));
let randomWord = interests[wordCount];

const IndexPage = () => (
  <IndexLayout fontSize={8} height={heights.headerBig}>
    <Page>
      <Container>
        <Title>
          Developer, engineer and <VaryingWord>{randomWord}</VaryingWord>{" "}
          enthusiast
        </Title>
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
