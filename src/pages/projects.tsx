import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../styles/variables";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

import brushi from "../images/Brushi_logo.png";
import sgc from "../images/SGC.png";
import ol from "../images/Osqledaren.png";
import sgcpdf from "../pdfs/sgc.pdf";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 0 1rem;
  border-radius: 10px 0;
  background-color: #f0f8ff;

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
  width: 50%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;

const ImageBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  justify-content: space-evenly;
  margin: 0.5rem 0;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
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
    year: "2020",
    info: `Sonic Gesture Challenge is a sound and gesture mapping game
  where the goal is to repeat a gesture after only hearing the
  sound it produces. This was a really fun project focusing on how to make sound
  designs for the web, using WebAudioXML by Hans Lindetorp, and
  exploring if it is feasible to use this framework for these
  kinds of ear-training apps.`,
    contributions: [
      "🎨 Designed and built the interface",
      "👨‍💻 Worked on the comparing algorythm",
      "🎵 Designed one of the 7 sounds",
    ],
    externals: [
      {
        url: "https://johannesloor.github.io/Sonic-Gesture-Challenge/",
        text: "Check out project",
      },
      {
        url: sgcpdf,
        text: "Read report",
      },
    ],
  },
  {
    image: ol,
    title: "Osqledaren.se",
    year: "2019/2020",
    info: `Osqledaren is the student union newspaper at KTH. For the
  semester of 2019/2020 I was responsible for the website and lead
  a team of eight, building a completely new website. The new
  website is built using React and Gatsby with a custom cms on Sanity.`,
    contributions: [``],
    externals: [{ url: "https://osqledaren.se", text: "Go to Osqledaren" }],
  },
  {
    image: brushi,
    title: "Brushi",
    year: "2019",
    info: `Description Description Description Description Description
  Description Description Description Description Description
  Description Description`,
    contributions: [``],
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
            <h3>{project.title}</h3>
            <p>{project.year}</p>
            <Description>
              <DescriptionText>
                <p>{project.info}</p>
                <h4>What I did:</h4>
                {project.contributions.map((contribution) => (
                  <p key={contribution}>{contribution}</p>
                ))}
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
