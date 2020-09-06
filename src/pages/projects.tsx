import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../styles/variables";
import Page from "../components/Page";
import Container from "../components/Container";
import Card from "../components/Card";
import IndexLayout from "../layouts";

import brushi from "../images/Brushi_logo.png";
import sgc from "../images/SGC.png";
import ol from "../images/Osqledaren.png";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f0f8ff /*#f5f5f5*/;
  :hover {
    text-decoration: none;
  }

  color: black;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column-reverse;
  }
`;

const DescriptionText = styled.div`
  width: 55%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;

const ImageBtnContainer = styled.div`
  align-self: center;
  width: 40%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const Button = styled.a`
  padding: 1rem 1rem;
  margin: 0.5rem;
  background-color: ${colors.background};
  border-radius: 25px;
  text-decoration: none;
  color: black;
  border: 2px solid transparent;
  &:hover {
    text-decoration: none;
    border-color: white;
  }
`;

const PageTitle = styled.h1`
  width: 100vw;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${colors.background};
`;

let projects = [
  {
    title: "Sonic Gesture Challenge",
    image: sgc,
    info: `Sonic Gesture Challenge is a sound and gesture mapping game
  where the goal is to repeat a gesture after only hearing the
  sound it produces. In this project I designed and built the
  interface, helped with the sound-gesture comparison algorithm
  and designed one of the sounds used. This was a really fun project focusing on how to make sound
  designs for the web, using WebAudioXML by Hans Lindetorp, and
  exploring if it is feasible to use this framework for these
  kinds of ear-training apps.`,
    externals: [
      {
        url: "https://johannesloor.github.io/Sonic-Gesture-Challenge/",
        text: "Check out project",
      },
      {
        url: "",
        text: "Read report",
      },
    ],
  },
  {
    image: ol,
    title: "Osqledaren.se",
    info: `Osqledaren is the student union newspaper at KTH. For the
  semester of 2019/2020 I was responsible for the website and lead
  a team of eight, building a completely new website. The new
  website is built using React and Gatsby with a custom cms on Sanity.`,
    externals: [{ url: "https://osqledaren.se", text: "Check out project" }],
  },
  {
    image: brushi,
    title: "Brushi",
    info: `Description Description Description Description Description
  Description Description Description Description Description
  Description Description`,
    externals: [{ url: "https://osqledaren.se", text: "Watch video" }],
  },
];
const Projects = () => (
  <IndexLayout>
    <Page>
      <PageTitle>Projects</PageTitle>

      <Container>
        {projects.map((project) => (
          <Project key={project.title}>
            <Description>
              <DescriptionText>
                <h3>{project.title}</h3>
                {project.info}
                <h4>What I did:</h4> bla
              </DescriptionText>
              <ImageBtnContainer>
                <img src={project.image} />
                <ButtonWrapper>
                  {project.externals.map((external) => (
                    <Button
                      key={external.url}
                      href={external.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {external.text}
                    </Button>
                  ))}
                </ButtonWrapper>
              </ImageBtnContainer>
            </Description>
          </Project>
        ))}
      </Container>
    </Page>
  </IndexLayout>
);

export default Projects;
