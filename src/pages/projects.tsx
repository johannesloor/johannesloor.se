import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../styles/variables";
import { projectData } from "../styles/projectData";
import { widths } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

import Page from "../components/Page";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import ProjectImages from "../components/ProjectImages";
import IndexLayout from "../layouts";

const ProjectsContainer = styled(Container)`
  width: 100%;
  flex-direction: row;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${getEmSize(widths.lg)}em;
  margin: 1rem;
  padding: 0.5rem 1rem 1rem;
  border-radius: 10px 0;
  background-color: ${colors.brand};
  color: black;
  @media (max-width: ${breakpoints.sm + "px"}) {
    justify-content: center;
    margin: 1rem 0;
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

const ImageTitleContainer = styled.div`
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
  margin: 0.5rem;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  background-color: ${colors.background};
  border-radius: 10px 0;
  text-decoration: none;
  color: black;
  border: 2px solid transparent;
  &:hover {
    text-decoration: none;
    border-color: white;
  }
`;

const Video = styled.iframe`
  height: 15rem;
  border: none;
`;

const Projects = () => (
  <IndexLayout>
    <Page>
      <PageTitle currentPage="Projects" linkedPage="About" reverse />

      <ProjectsContainer>
        {projectData.map((project) => (
          <Project key={project.title}>
            <Description>
              <ImageTitleContainer>
                <h3>{project.title}</h3>
                <p>{project.year}</p>
                {project.vimeoId ? (
                  <Video
                    src={"https://player.vimeo.com/video/" + project.vimeoId}
                    allow="fullscreen"
                    title={project.title}
                  />
                ) : (
                  <ProjectImages
                    pictureNr={project.pictureNr ? project.pictureNr : 0}
                  />
                )}
              </ImageTitleContainer>
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
      </ProjectsContainer>
    </Page>
  </IndexLayout>
);

export default Projects;
