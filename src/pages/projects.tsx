import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../styles/variables";
import { projects } from "../styles/projects";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

const Project = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 0.5rem 1rem;
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
    flex-direction: column;
  }
`;

const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;

const ImageBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
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

const Image = styled.img`
  max-height: 300px;
`;

const Video = styled.iframe`
  height: 15rem;
  border: none;
`;

const PageTitle = styled.h1`
  width: 100vw;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${colors.background};
`;

const Projects = () => (
  <IndexLayout>
    <Page>
      <PageTitle>Projects</PageTitle>

      <Container>
        {projects.map((project) => (
          <Project key={project.title}>
            <Description>
              <ImageBtnContainer>
                <h3>{project.title}</h3>
                <p>{project.year}</p>
                {project.vimeoId ? (
                  <Video
                    src={"https://player.vimeo.com/video/" + project.vimeoId}
                    allow="fullscreen"
                    title={project.title}
                  />
                ) : (
                  <Image src={project.image}></Image>
                )}
              </ImageBtnContainer>
              <DescriptionText>
                <div>
                  <h4>Info</h4>
                  {project.info}
                </div>
                <div>
                  <h4>What I did</h4>
                  {project.contributions.map((contribution) => (
                    <p key={contribution}>{contribution}</p>
                  ))}
                </div>
                {project.externals ? (
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
                ) : (
                  ""
                )}
              </DescriptionText>
            </Description>
          </Project>
        ))}
      </Container>
    </Page>
  </IndexLayout>
);

export default Projects;
