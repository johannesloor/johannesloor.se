import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../styles/variables";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import brushi from "../images/Brushi_logo.png";
import sgc from "../images/SGC.png";
import ol from "../images/Osqledaren.png";

const Project = styled.a`
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
    padding-top: 1rem;
  }
`;

const DescriptionImage = styled.img`
  align-self: center;
  width: 40%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;

const PageTitle = styled.div`
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
    url: "https://johannesloor.github.io/Sonic-Gesture-Challenge/",
  },
  {
    image: ol,
    title: "Osqledaren.se",
    info: `Osqledaren is the student union newspaper at KTH. For the
  semester of 2019/2020 I was responsible for the website and lead
  a team of eight, building a completely new website. The new
  website is built using React and Gatsby with the cms on Sanity.`,
    url: "https://osqledaren.se",
  },
  {
    image: brushi,
    title: "Brushi",
    info: `Description Description Description Description Description
  Description Description Description Description Description
  Description Description`,
  },
];

const Projects = () => (
  <IndexLayout>
    <Page>
      <PageTitle>
        <h1>Projects</h1>
      </PageTitle>

      <Container>
        {projects.map((project) => (
          <Project href={project.url ? project.url : "#void"}>
            <Description>
              <DescriptionText>
                <h3>{project.title}</h3>
                {project.info}
                <h4>What I did:</h4> bla
              </DescriptionText>
              <DescriptionImage src={project.image}></DescriptionImage>
            </Description>
          </Project>
        ))}
      </Container>
    </Page>
  </IndexLayout>
);

export default Projects;
