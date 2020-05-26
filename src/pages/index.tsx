import * as React from "react";
import styled from "@emotion/styled";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import Card from "../components/Card";
import meCap from "../images/meCap.jpg";
import meCat from "../images/meCat.jpg";
import meBirthday from "../images/meBirthday.jpg";
import meSwim from "../images/meSwim.jpg";

import { breakpoints } from "../styles/variables";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
  @media (max-width: ${breakpoints.xs + "px"}) {
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  padding-top: 1rem;
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

const PictureWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-self: center;
  flex-wrap: wrap;
  width: 90vw;
`;
const ProfilePic = styled.img`
  width: 15%;
  height: 100%;
  border-radius: 10%;
  @media (min-height: ${breakpoints.xl + "px"}) {
    margin: 1rem;
    width: 30%;
  }
  @media (max-width: ${breakpoints.md + "px"}) {
    width: 25%;
  }
`;

let interests = ["Apple", "music", "smart home", "golf"];
let wordCount = Math.floor(Math.random() * Math.floor(interests.length));
let randomWord = interests[wordCount];

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <PictureWrapper>
        <ProfilePic src={meCap}></ProfilePic>
        <ProfilePic src={meCat}></ProfilePic>
        <ProfilePic src={meBirthday}></ProfilePic>
        <ProfilePic src={meSwim}></ProfilePic>
      </PictureWrapper>
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
